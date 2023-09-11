import { Category, CategoryWord } from "./Board";
import { Storage } from "@utilities";
import type { Setter } from "solid-js";

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
export const grabTodaysPuzzle = async (setPuzzle: Setter<Category[]>) => {
  const storageKey = "connectionsPuzzle";

  const storageObject = Storage.get(storageKey);

  console.log("Hello?", { storageObject });

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

  // Function to set the puzzle and return
  const applyPuzzle = (
    puzzle: any,
    currentPuzzleIndex: number,
    lastPuzzleComplete: Date
  ) => {
    // Set puzzle to state
    setPuzzle(puzzle);
    // Update user storage
    Storage.set(storageKey, {
      currentPuzzleIndex,
      lastPuzzleComplete,
      puzzle,
    });

    return true;
  };

  // Logic for grabbing puzzle
  if (!storageObject) {
    // User doesn't have storage
    const puzzle = await fetchPuzzle(0);

    if (puzzle) {
      return applyPuzzle(puzzle, 0, new Date());
    }
    // Return false to keep state
    return false;
  } else {
    // Storage exists
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastPuzzleComplete = new Date(storageObject.lastPuzzleComplete);
    const currentPuzzle = storageObject.puzzle;

    // Check if the storage actually has a puzzle in it
    if (!currentPuzzle) {
      const currentPuzzleIndex = storageObject.currentPuzzleIndex ?? 0;
      const lastPuzzleComplete = storageObject.lastPuzzleComplete ?? new Date();
      const puzzle = await fetchPuzzle(currentPuzzleIndex);

      if (puzzle) {
        return applyPuzzle(puzzle, currentPuzzleIndex, lastPuzzleComplete);
      }
    }

    if (today > lastPuzzleComplete) {
      // Load the next puzzle
      const puzzleIndex = storageObject.currentPuzzleIndex + 1;

      const puzzle = await fetchPuzzle(puzzleIndex);

      if (puzzle) {
        return applyPuzzle(puzzle, puzzleIndex, new Date());
      }

      // Return false to keep state
      return false;
    } else {
      // It is likely the same day, use puzzle from storage
      applyPuzzle(
        storageObject.puzzle,
        storageObject.currentPuzzleIndex,
        storageObject.lastPuzzleComplete
      );
      // Return false to keep state
      return false;
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
