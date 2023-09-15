import { Category, CategoryWord } from "./Board";
import { Storage } from "@utilities";
import type { Setter } from "solid-js";
import type { StorageState } from "../../Types";

// Splits the data into individual word-category pairs
export const splitWords = (Categories: Category[]): CategoryWord[] => {
  const results: CategoryWord[] = [];

  Categories.forEach((cat) => {
    cat.Words.forEach((word) => {
      results.push({
        Category: cat.Category,
        Word: word,
      });
    });
  });

  return results;
};

// Checks storage for todays data, or grabs it from the api
export const grabTodaysPuzzle = async () => {
  const storageKey = "connectionsPuzzle";

  const storageObject: StorageState = Storage.get(storageKey);

  // Function to call the api
  const fetchPuzzle = async (puzzleIndex: number) => {
    const res = await fetch("/api/puzzle", {
      method: "post",
      body: JSON.stringify({
        puzzleIndex,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      const puzzleString = data.body.puzzle;
      const parsedPuzzle = JSON.parse(puzzleString);

      return parsedPuzzle;
    }

    return false;
  };

  // Logic for grabbing puzzle
  if (!storageObject) {
    // User doesn't have storage
    const puzzle = await fetchPuzzle(0);

    if (puzzle) {
      const newPuzzleState: StorageState = {
        board: puzzle,
        correctGuesses: [],
        currentGuesses: [],
        currentPuzzleIndex: 0,
        incorrectGuesses: [],
        lastPuzzleStarted: new Date(),
        numberOfGuesses: 0,
        puzzle: puzzle,
      };

      return newPuzzleState;
    }
    // Return false for error
    return false;
  } else {
    // Storage exists
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastPuzzleComplete = storageObject.lastPuzzleComplete
      ? new Date(storageObject.lastPuzzleComplete)
      : undefined;
    const lastPuzzleStarted = new Date(storageObject.lastPuzzleStarted);
    const currentPuzzle = storageObject.puzzle;

    if (!currentPuzzle) {
      // Storage exists, but there is no puzzle
      const currentPuzzleIndex = storageObject.currentPuzzleIndex ?? 0;
      const lastPuzzleComplete = storageObject.lastPuzzleComplete ?? new Date();
      const puzzle = await fetchPuzzle(currentPuzzleIndex);

      if (puzzle) {
        const puzzleState: StorageState = {
          board: puzzle,
          correctGuesses: [],
          currentGuesses: [],
          currentPuzzleIndex: currentPuzzleIndex,
          incorrectGuesses: [],
          lastPuzzleStarted: lastPuzzleStarted,
          lastPuzzleComplete: lastPuzzleComplete,
          numberOfGuesses: 0,
          puzzle: puzzle,
        };

        return puzzleState;
      }
    }

    // We have storage object and a puzzle
    if (lastPuzzleComplete && today > lastPuzzleComplete) {
      // It is the next day, load the next puzzle
      const puzzleIndex = storageObject.currentPuzzleIndex + 1;

      const puzzle = await fetchPuzzle(puzzleIndex);

      if (puzzle) {
        const puzzleState: StorageState = {
          board: puzzle,
          correctGuesses: [],
          currentGuesses: [],
          currentPuzzleIndex: puzzleIndex,
          incorrectGuesses: [],
          lastPuzzleStarted: new Date(),
          numberOfGuesses: 0,
          puzzle: puzzle,
        };

        return puzzleState;
      }

      // Return false for error
      return false;
    } else {
      // It is the same day, we should use the state in storage
      return storageObject;
    }
  }
};

// Log win
export const logWin = (numOfGuesses: number) => {
  // First grab the stats
  let stats = Storage.get("consta");

  // Let's say stats doesn't exist yet
  if (!stats) {
    stats = {
      winsByGuessNum: [],
      lastSevenDays: [],
    };
  }

  // Update date last completed
  const storageObject: StorageState = Storage.get("connectionsPuzzle");
  storageObject.lastPuzzleComplete = new Date();
  Storage.set("connectionsPuzzle", storageObject);

  // Increment the win total per num of guesses
  const numOfWins = stats.winsByGuessNum[numOfGuesses] || 0;
  stats.winsByGuessNum[numOfGuesses] = numOfWins + 1;

  // Increment last seven days
  if (stats.lastSevenDays?.length === 7) {
    // Remove day 1
    stats.lastSevenDays.shift();
  }

  const today = new Date();
  stats.lastSevenDays.push({
    date: today.toLocaleDateString(),
    guesses: numOfGuesses,
  });

  return new Promise<void>((resolve, reject) => {
    try {
      // Update storage
      Storage.set("consta", stats);
    } catch (err) {
      reject(err);
    }
    resolve();
  });
};

// Determine level of correctness for guessed words
export const generateGuessHint = (userGuesses: CategoryWord[]) => {
  // We will display a number of correct guesses that belong to a specific category
  const matchingCategories: number[] = [];

  Array.from(new Set(userGuesses.map((g) => g.Category))).forEach((c) => {
    matchingCategories.push(userGuesses.filter((g) => g.Category === c).length);
  });

  switch (matchingCategories.length) {
    case 0:
    default:
      return "How did you do that?";
    case 1:
      return "Those are all correct. So you shouldn't be seeing this";
    case 2:
      return matchingCategories.includes(3)
        ? "You got 3 in one Category, and 1 in another"
        : "You got 2 in one Category, and 2 in another";
    case 3:
      return "You have 2 in one Category, and split the other 2";
    case 4:
      return "All four of those guesses belong to different categories";
  }
};
