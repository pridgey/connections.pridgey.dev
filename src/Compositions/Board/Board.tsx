import type { Component } from "solid-js";
import {
  For,
  createSignal,
  createEffect,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Button, Card, IconButton } from "@components";
import {
  CategoryCard,
  NeedsMoreSelectionsDialog,
  WinDialog,
} from "@compositions";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";
import { splitWords, grabTodaysPuzzle, logWin } from "./Board.functions";
import { Storage } from "@utilities";

// Represents a category and its corresponding words
export type Category = {
  Category: string;
  Words: string[];
};

// Represents a singular word and its parent category
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
  const [currentGuesses, setCurrentGuesses] = createSignal<CategoryWord[]>([]);
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
  // Show/hide guesses dialog
  const [showGuessesDialog, setShowGuessesDialog] = createSignal(false);
  // Show winner dialog
  const [showWin, setShowWin] = createSignal(false);

  // Grab CSS from styles object
  const { board, fourcol, threecol } = styles;

  // Anytime puzzleWords or correctGuesses updates, we need to refresh the board
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
      <div
        classList={{
          [board]: true,
          [fourcol]: puzzleWords()[0]?.Words.length === 4,
          [threecol]: puzzleWords()[0]?.Words.length === 3,
        }}
      >
        <For each={shuffle(splitWords(boardWords()))}>
          {(cw) => (
            <Card
              OnClick={() => {
                // If the word is already in the list, remove it
                if (currentGuesses().some((cg) => cg.Word === cw.Word)) {
                  // Find index of the word in questions
                  const index = currentGuesses().findIndex(
                    (cg) => cg.Word === cw.Word
                  );
                  // Get array of guessed words
                  const words = currentGuesses();
                  // Remove word
                  words.splice(index, 1);
                  // Update state
                  setCurrentGuesses([...words]);
                } else {
                  // Add the word to the list, but only if there isn't already the right number of guesses
                  const words = currentGuesses();
                  if (words.length < puzzleWords()[0]?.Words.length) {
                    // Add guess and update state
                    words.push(cw);
                    setCurrentGuesses([...words]);
                  }
                }
              }}
              active={currentGuesses().some((cg) => cg.Word === cw.Word)}
              incorrect={incorrectGuesses().includes(cw)}
              correct={false}
            >
              {cw.Word}
            </Card>
          )}
        </For>
      </div>
      {/* Footer has submit button and number of guesses */}
      <div class={styles.foot}>
        <span>{numOfGuesses()}</span>
        <IconButton
          Icon="shuffle"
          OnClick={() => setBoardWords([...shuffle(boardWords())])}
        />
        <Button
          Disabled={currentGuesses().length !== puzzleWords()[0]?.Words.length}
          Text="SUBMIT"
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
                // Grab all correct guesses
                const currentCorrect = correctGuesses();
                // Push whatever is yet in there from the words list
                currentCorrect.push(
                  puzzleWords().filter((d) => !correctGuesses().includes(d))[0]
                );
                // Update state for correct guesses
                setCorrectGuesses([...currentCorrect]);
                // Clear the board
                setBoardWords([]);
                // Persist changes
                Storage.set("conwg", [...currentCorrect]);
                // Update user stats and show win
                logWin(numOfGuesses())
                  .then(() => setShowWin(true))
                  .catch(console.error);
              }
            } else {
              // Incorrect, deselect words
              // Could be cool to add something here like a shake effect as a nice feedback
              setIncorrectGuesses(guesses);
              setCurrentGuesses([]);
              Storage.set("concg", []);
            }
          }}
          OnDisabledClick={() => setShowGuessesDialog(true)}
        />
      </div>
      <Show when={showGuessesDialog()}>
        <NeedsMoreSelectionsDialog
          OnClose={() => setShowGuessesDialog(false)}
        />
      </Show>
      <Show when={showWin()}>
        <WinDialog OnClose={() => setShowWin(false)} />
      </Show>
    </>
  );
};
