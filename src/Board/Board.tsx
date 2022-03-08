import type { Component } from "solid-js";
import { For, createSignal, createEffect, onCleanup } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { Card } from "./Card";
import { GuessButton } from "./GuessButton";
import { CategoryCard } from "./CategoryCard";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";

const words = [
  ["Garfield", "Polk", "Bush"],
  ["Odie", "Scrappy", "Clifford"],
  ["Lincoln", "Data", "Natural"],
  ["Ardent", "Fierce", "Aggressive"],
];

export const Board: Component = () => {
  // Stateful array of current user guesses
  const [activeWords, setActiveWords] = createSignal<string[]>([]);
  // Stateful array of correctly guessed words
  const [correctWords, setCorrectWords] = createSignal<string[][]>([]);
  // Number of guesses
  const [numOfGuesses, setNumOfGuesses] = createSignal<number>(0);
  // Incorrect words. Items in array will show an animation
  const [incorrectWords, setIncorrectWords] = createSignal<string[]>([]);

  // Reference to the incorrect animation timeout, used to ensure timeout doesn't continue on unmount
  let incorrectAnimationTimeout: number;

  // Reset incorrect words after a second
  createEffect(() => {
    if (incorrectWords().length > 0) {
      incorrectAnimationTimeout = setTimeout(() => setIncorrectWords([]), 300);
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
        <For each={correctWords()}>
          {(winnerGroup) => (
            <CategoryCard Words={winnerGroup} Category="To Do" />
          )}
        </For>
      </div>
      {/* The board is where the words still in play are displayed */}
      <div class={styles.board}>
        <For
          each={shuffle(
            // Show all words not currently in the correctWords arrays
            words.flat().filter((word) => !correctWords().flat().includes(word))
          )}
        >
          {(cardWord) => (
            <Card
              OnClick={() => {
                // If the word is already in the list, remove it
                if (activeWords().includes(cardWord)) {
                  // Find index of the word in questions
                  const index = activeWords().indexOf(cardWord);
                  // Get array of guessed words
                  const words = activeWords();
                  // Remove word
                  words.splice(index, 1);
                  // Update state
                  setActiveWords([...words]);
                } else {
                  // Add the word to the list, but only if there isn't already 3 guesses
                  const words = activeWords();
                  if (words.length < 3) {
                    // Add guess and update state
                    words.push(cardWord);
                    setActiveWords([...words]);
                  }
                }
              }}
              active={activeWords().includes(cardWord)}
              incorrect={incorrectWords().includes(cardWord)}
            >
              {cardWord}
            </Card>
          )}
        </For>
      </div>
      {/* Footer has submit button and number of guesses */}
      <div class={styles.foot}>
        <span>{numOfGuesses()}</span>
        <GuessButton
          Disabled={activeWords().length !== 3}
          OnClick={() => {
            // Increment guess counter
            setNumOfGuesses(numOfGuesses() + 1);
            // Check guess, see if it's correct
            const guesses = activeWords();
            // There must be one group of words (.some) where all the words match (.every)
            const win = words.some((categories) =>
              categories.every((word) => guesses.includes(word))
            );
            if (win) {
              // Add guesses to array of correct words
              const correct = correctWords();
              correct.push(guesses);
              console.log("Updated Correct:", correct);
              setCorrectWords([...correct]);
              // Reset guesses
              setActiveWords([]);
              // If there's only one set left, it must be right
              if (correctWords().length === 3) {
                setCorrectWords(words);
              }
            } else {
              // Incorrect, deselect words
              // Could be cool to add something here like a shake effect as a nice feedback
              setIncorrectWords(guesses);
              setActiveWords([]);
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
