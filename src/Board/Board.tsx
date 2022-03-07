import type { Component } from "solid-js";
import { For, createSignal, createEffect } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { Card } from "./Card";
import { GuessButton } from "./GuessButton";
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
  const [correctWords, setCorrectWords] = createSignal<string[]>([]);
  // Number of guesses
  const [numOfGuesses, setNumOfGuesses] = createSignal<number>(0);

  createEffect(() => console.log(activeWords()));

  return (
    <>
      <div class={styles.board}>
        <For each={correctWords()}>
          {(winnerWord) => <Card correct={true}>{winnerWord}</Card>}
        </For>
        <For
          each={shuffle(
            words.flat().filter((word) => !correctWords().includes(word))
          )}
        >
          {(cardWord) => (
            <Card
              OnClick={() => {
                // If the word is already in the list, remove it
                if (activeWords().includes(cardWord)) {
                  // Find index
                  const index = activeWords().indexOf(cardWord);
                  // Get array
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
            >
              {cardWord}
            </Card>
          )}
        </For>
      </div>
      <div class={styles.foot}>
        <span>{numOfGuesses()}</span>
        <GuessButton
          Disabled={activeWords().length !== 3}
          OnClick={() => {
            // Increment guess counter
            setNumOfGuesses(numOfGuesses() + 1);
            // Check guess, see if it's correct
            const guesses = activeWords();
            const win = words.some((categories) =>
              categories.every((word) => guesses.includes(word))
            );
            if (win) {
              // Add guesses to array of correct words
              const correct = correctWords();
              correct.push(...guesses);
              setCorrectWords([...correct]);
              // Reset guesses
              setActiveWords([]);
              // If there's only one set left, it must be right
              if (correctWords().length === 9) {
                setCorrectWords([...words.flat()]);
              }
            } else {
              // Incorrect, deselect words
              // Could be cool to add something here like a shake effect as a nice feedback
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
