import type { Component } from "solid-js";
import {
  For,
  createSignal,
  createEffect,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Button, Card, IconButton, Toast } from "@components";
import { CategoryCard, WinDialog } from "@compositions";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";
import {
  splitWords,
  grabTodaysPuzzle,
  logWin,
  generateGuessHint,
} from "./Board.functions";
import { Logging, Storage } from "@utilities";
import { StorageState } from "../../Types";

// Configuration
const attemptsUntilHint = 15;

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
  // Show winner dialog
  const [showWin, setShowWin] = createSignal(false);
  // Toast hints
  const [toastMessage, setToastMessage] = createSignal("");

  // Grab CSS from styles object
  const { board, fourcol, threecol } = styles;

  // Anytime puzzleWords or correctGuesses updates, we need to refresh the board
  createEffect(() => {
    //Remove any words already guessed
    const updatedWords =
      puzzleWords()?.filter(
        (c) =>
          !correctGuesses()
            .map((g) => g.Category)
            .includes(c.Category)
      ) ?? [];
    setBoardWords([...updatedWords]);
  });

  // Startup
  onMount(async () => {
    // Grab day's puzzle, returns true if new puzzle loaded
    const storageObj: StorageState | false = await grabTodaysPuzzle();

    if (!storageObj) {
      // Error
    }

    // Must be an actual storage object
    const storageState: StorageState = storageObj as StorageState;

    console.log("Storage State:", { storageState });

    // Set the source of truth
    setPuzzleWords(storageState.puzzle);
    // Set the number of guesses
    setNumOfGuesses(storageState.numberOfGuesses);
    // Set any correct guesses
    setCorrectGuesses(storageState.correctGuesses);
    // Set any current guesses
    setCurrentGuesses(storageState.currentGuesses);
    // Holds any incorrect guesses
    setIncorrectGuesses(storageState.incorrectGuesses);
    // Set the puzzle to be rendered on the board
    setBoardWords(storageState.board);

    Logging().log("Mount", "Page Mounted");
  });

  // Show debug info
  createEffect(() => {
    // Set storage state in storage
    const currentStorage: StorageState = Storage.get("connectionsPuzzle");

    const storageState: StorageState = {
      board: boardWords(),
      correctGuesses: correctGuesses(),
      currentGuesses: currentGuesses(),
      currentPuzzleIndex: currentStorage?.currentPuzzleIndex ?? 0,
      incorrectGuesses: incorrectGuesses(),
      lastPuzzleStarted: currentStorage?.lastPuzzleStarted ?? new Date(),
      lastPuzzleComplete: currentStorage?.lastPuzzleComplete,
      numberOfGuesses: numOfGuesses(),
      puzzle: puzzleWords(),
    };

    Storage.set("connectionsPuzzle", storageState);

    // Log stuff
    const { log } = Logging();

    log(
      "State",
      `**puzzleWords**: ${puzzleWords()
        ?.map((i) => `**${i.Category}**: ${i.Words.join(", ")}`)
        .join(",")}`
    );
    if (currentGuesses().length) {
      log(
        "State",
        `**currentGuesses**: ${currentGuesses()
          .map((i) => `**${i.Category}**: ${i.Word}`)
          .join(",")}`
      );
    }
    if (correctGuesses().length) {
      log(
        "State",
        `**correctGuesses**: ${correctGuesses()
          .map((i) => `**${i.Category}**: ${i.Words.join(", ")}`)
          .join(",")}`
      );
    }
    log("State", `numOfGuesses: ${numOfGuesses()}`);
    if (incorrectGuesses().length) {
      log(
        "State",
        `**incorrectGuesses**: ${incorrectGuesses()
          .map((i) => `**${i.Category}**: ${i.Word}`)
          .join(",")}`
      );
    }
    if (boardWords().length) {
      log(
        "State",
        `**boardWords**: ${boardWords()
          .map((i) => `**${i.Category}**: ${i.Words.join(", ")}`)
          .join(",")}`
      );
    }
  });

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
          [fourcol]: puzzleWords()?.[0]?.Words.length === 4,
          [threecol]: puzzleWords()?.[0]?.Words.length === 3,
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
          Disabled={
            currentGuesses().length !== puzzleWords()?.[0]?.Words.length
          }
          Text="SUBMIT"
          OnClick={() => {
            // Increment guess counter
            const timesGuessed = numOfGuesses() + 1;
            setNumOfGuesses(timesGuessed);

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
              } else {
                // If we get here, I'm a bad dev
                console.error("Not sure how, but couldn't find the guess data");
              }

              // Reset guesses
              setCurrentGuesses([]);
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
                // Update user stats and show win
                logWin(numOfGuesses())
                  .then(() => setShowWin(true))
                  .catch(console.error);
              }
            } else {
              // Incorrect, deselect words

              // Show hint if struggling
              if (numOfGuesses() >= attemptsUntilHint) {
                setToastMessage(generateGuessHint(currentGuesses()));
                setTimeout(() => {
                  setToastMessage("");
                }, 4100);
              }

              setIncorrectGuesses(guesses);
              setCurrentGuesses([]);
            }
          }}
          OnDisabledClick={() => {
            setToastMessage(
              "You've selected too few items. You must select 4 cards."
            );
            setTimeout(() => setToastMessage(""), 4100);
          }}
        />
      </div>
      <Show when={showWin()}>
        <WinDialog OnClose={() => setShowWin(false)} />
      </Show>
      <Show when={toastMessage().length > 0}>
        <Toast Text={toastMessage()} />
      </Show>
    </>
  );
};
