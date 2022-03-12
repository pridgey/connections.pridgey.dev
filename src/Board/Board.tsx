import type { Component } from "solid-js";
import { For, createSignal, createEffect, onCleanup, onMount } from "solid-js";
import { Card } from "./Card";
import { GuessButton } from "./GuessButton";
import { CategoryCard } from "./CategoryCard";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";
import { splitWords, grabTodaysPuzzle } from "./Board.functions";

export type Category = {
  Category: string;
  Words: string[];
};

export type CategoryWord = {
  Category: string;
  Word: string;
};

const data: Category[] = [
  {
    Category: "Types of Horses",
    Words: ["Mustang", "Appaloosa", "Arabian"],
  },
  {
    Category: "American Muscle Cars",
    Words: ["Corvette", "Camaro", "Viper"],
  },
  {
    Category: "Types of Snakes",
    Words: ["Cottonmouth", "Copperhead", "Python"],
  },
  {
    Category: "Programming Languages",
    Words: ["Ruby", "Java", "PHP"],
  },
];

export const Board: Component = () => {
  // The source of truth
  const [puzzleWords, setPuzzleWords] = createSignal<Category[]>([]);
  // Stateful array of current user guesses
  const [currentGuesses, setCurrentGuesses] = createSignal<CategoryWord[]>(
    JSON.parse(localStorage.getItem("concg") ?? "[]")
  );
  // Stateful array of correctly guessed words
  const [correctGuesses, setCorrectGuesses] = createSignal<Category[]>(
    JSON.parse(localStorage.getItem("conwg") ?? "[]")
  );
  // Number of guesses
  const [numOfGuesses, setNumOfGuesses] = createSignal<number>(
    JSON.parse(localStorage.getItem("conng") ?? "0")
  );
  // Incorrect words. Items in array will show an animation
  const [incorrectGuesses, setIncorrectGuesses] = createSignal<CategoryWord[]>(
    []
  );

  // Startup
  onMount(() => {
    // Grab day's puzzle
    grabTodaysPuzzle();
  });

  // Reference to the incorrect animation timeout, used to ensure timeout doesn't continue on unmount
  let incorrectAnimationTimeout: number;

  // Reset incorrect words after a second
  createEffect(() => {
    if (incorrectGuesses().length > 0) {
      incorrectAnimationTimeout = setTimeout(
        () => setIncorrectGuesses([]),
        300
      );
    }
  });

  // Cleanup function to clear the timeout when unmounting
  onCleanup(() => {
    clearTimeout(incorrectAnimationTimeout);
  });

  return (
    <>
      {/* Categories show the correct answers found by the user */}
      <div class={styles.categories}>
        <For each={correctGuesses()}>
          {(winnerGroup) => (
            <CategoryCard
              Words={winnerGroup.Words}
              Category={winnerGroup.Category}
            />
          )}
        </For>
      </div>
      {/* The board is where the words still in play are displayed */}
      <div class={styles.board}>
        <For
          each={shuffle(
            // Show all words not currently in the correctGuesses arrays
            splitWords(
              puzzleWords().filter((c) => !correctGuesses().includes(c))
            )
          )}
        >
          {(cw) => (
            <Card
              OnClick={() => {
                // If the word is already in the list, remove it
                if (currentGuesses().includes(cw)) {
                  // Find index of the word in questions
                  const index = currentGuesses().indexOf(cw);
                  // Get array of guessed words
                  const words = currentGuesses();
                  // Remove word
                  words.splice(index, 1);
                  // Update state
                  setCurrentGuesses([...words]);
                  localStorage.setItem("concg", JSON.stringify([...words]));
                } else {
                  // Add the word to the list, but only if there isn't already 3 guesses
                  const words = currentGuesses();
                  if (words.length < 3) {
                    // Add guess and update state
                    words.push(cw);
                    setCurrentGuesses([...words]);
                    localStorage.setItem("concg", JSON.stringify([...words]));
                  }
                }
              }}
              active={currentGuesses().includes(cw)}
              incorrect={incorrectGuesses().includes(cw)}
            >
              {cw.Word}
            </Card>
          )}
        </For>
      </div>
      {/* Footer has submit button and number of guesses */}
      <div class={styles.foot}>
        <span>{numOfGuesses()}</span>
        <GuessButton
          Disabled={currentGuesses().length !== 3}
          OnClick={() => {
            // Increment guess counter
            const timesGuessed = numOfGuesses() + 1;
            setNumOfGuesses(timesGuessed);
            localStorage.setItem("conng", JSON.stringify(timesGuessed));

            // Check guess, see if it's correct
            const guesses = currentGuesses();
            const guessedWords = guesses.map((cw) => cw.Word);

            // There must be one group of words (.some) where all the words match (.every)
            const win = data.some((cat) =>
              cat.Words.every((word) => guessedWords.includes(word))
            );
            if (win) {
              // Add guesses to array of correct words
              const correct = correctGuesses();

              // Find the data record representing the correct guess
              const guessedCategory = data.find((c) =>
                c.Words.every((w) => guessedWords.includes(w))
              );

              // This should pretty much always resolve, since we validated above
              if (guessedCategory) {
                // Add the category to the correct list and update state
                correct.push(guessedCategory);
                setCorrectGuesses([...correct]);
                localStorage.setItem("conwg", JSON.stringify([...correct]));
              } else {
                // If we get here, I'm a bad dev
                console.error("Not sure how, but couldn't find the guess data");
              }

              // Reset guesses
              setCurrentGuesses([]);
              localStorage.setItem("concg", JSON.stringify([]));
              // If there's only one set left, it must be right
              if (correctGuesses().length === 3) {
                const currentCorrect = correctGuesses();
                currentCorrect.push(
                  data.filter((d) => !correctGuesses().includes(d))[0]
                );
                setCorrectGuesses([...currentCorrect]);
                localStorage.setItem(
                  "conwg",
                  JSON.stringify([...currentCorrect])
                );
              }
            } else {
              // Incorrect, deselect words
              // Could be cool to add something here like a shake effect as a nice feedback
              setIncorrectGuesses(guesses);
              setCurrentGuesses([]);
              localStorage.setItem("concg", JSON.stringify([]));
            }
          }}
          OnDisabledClick={() =>
            alert("You must selected three items to compare")
          }
        />
      </div>
    </>
  );
};
