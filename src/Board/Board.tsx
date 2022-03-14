import type { Component } from "solid-js";
import { For, createSignal, createEffect, onCleanup, onMount } from "solid-js";
import { Card } from "./Card";
import { GuessButton } from "./GuessButton";
import { CategoryCard } from "./CategoryCard";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";
import { splitWords, grabTodaysPuzzle } from "./Board.functions";
import { Storage } from "./../Utilities";

export type Category = {
  Category: string;
  Words: string[];
};

export type CategoryWord = {
  Category: string;
  Word: string;
};

export const Board: Component = () => {
  // The source of truth
  const [puzzleWords, setPuzzleWords] = createSignal<Category[]>([]);
  // What to display on the board
  const [boardWords, setBoardWords] = createSignal<Category[]>([]);
  // Stateful array of current user guesses
  const [currentGuesses, setCurrentGuesses] = createSignal<CategoryWord[]>(
    Storage.get("concg") ?? []
  );
  // Stateful array of correctly guessed words
  const [correctGuesses, setCorrectGuesses] = createSignal<Category[]>(
    Storage.get("conwg") ?? []
  );
  // Number of guesses
  const [numOfGuesses, setNumOfGuesses] = createSignal<number>(
    Storage.get("conng") ?? 0
  );
  // Incorrect words. Items in array will show an animation
  const [incorrectGuesses, setIncorrectGuesses] = createSignal<CategoryWord[]>(
    []
  );

  createEffect(() => {
    //Remove any words already guessed
    const updatedWords = puzzleWords().filter(
      (c) =>
        !correctGuesses()
          .map((g) => g.Category)
          .includes(c.Category)
    );
    setBoardWords([...updatedWords]);
  });

  // Startup
  onMount(() => {
    // Grab day's puzzle
    grabTodaysPuzzle(setPuzzleWords);
  });

  // Show debug info
  createEffect(() => {
    const debug = Storage.debug("state");
    debug &&
      console.log("State:", {
        puzzleWords: puzzleWords(),
        currentGuesses: currentGuesses(),
        correctGuesses: correctGuesses(),
        numOfGuesses: numOfGuesses(),
        incorrectGuesses: incorrectGuesses(),
        boardWords: boardWords(),
      });
  }, []);

  // Reference to the incorrect animation timeout, used to ensure timeout doesn't continue on unmount
  let incorrectAnimationTimeout: NodeJS.Timeout;

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
        <For each={shuffle(splitWords(boardWords()))}>
          {(cw) => {
            console.log("Rendering");
            return (
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
                    Storage.set("concg", [...words]);
                  } else {
                    // Add the word to the list, but only if there isn't already 3 guesses
                    const words = currentGuesses();
                    if (words.length < 3) {
                      // Add guess and update state
                      words.push(cw);
                      setCurrentGuesses([...words]);
                      Storage.set("concg", [...words]);
                    }
                  }
                }}
                active={currentGuesses().includes(cw)}
                incorrect={incorrectGuesses().includes(cw)}
              >
                {cw.Word}
              </Card>
            );
          }}
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
            Storage.set("conng", timesGuessed);

            // Check guess, see if it's correct
            const guesses = currentGuesses();
            const guessedWords = guesses.map((cw) => cw.Word);

            // There must be one group of words (.some) where all the words match (.every)
            const win = puzzleWords().some((cat) =>
              cat.Words.every((word) => guessedWords.includes(word))
            );
            if (win) {
              // Add guesses to array of correct words
              const correct = correctGuesses();

              // Find the data record representing the correct guess
              const guessedCategory = puzzleWords().find((c) =>
                c.Words.every((w) => guessedWords.includes(w))
              );

              // This should pretty much always resolve, since we validated above
              if (guessedCategory) {
                // Add the category to the correct list and update state
                correct.push(guessedCategory);
                setCorrectGuesses([...correct]);
                Storage.set("conwg", [...correct]);
              } else {
                // If we get here, I'm a bad dev
                console.error("Not sure how, but couldn't find the guess data");
              }

              // Reset guesses
              setCurrentGuesses([]);
              Storage.set("concg", []);
              // If there's only one set left, it must be right
              if (correctGuesses().length === 3) {
                const currentCorrect = correctGuesses();
                currentCorrect.push(
                  puzzleWords().filter((d) => !correctGuesses().includes(d))[0]
                );
                setCorrectGuesses([...currentCorrect]);
                setBoardWords([]);
                Storage.set("conwg", [...currentCorrect]);
              }
            } else {
              // Incorrect, deselect words
              // Could be cool to add something here like a shake effect as a nice feedback
              setIncorrectGuesses(guesses);
              setCurrentGuesses([]);
              Storage.set("concg", []);
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
