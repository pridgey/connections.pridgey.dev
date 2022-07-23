import { Category, CategoryWord } from "./Board";
import { Storage } from "@utilities";

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
export const grabTodaysPuzzle = (setPuzzle: any) => {
  // Base it on Colorado time, for now
  const today = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
    })
  );
  const dateKey = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;

  // Check storage first
  const storage = Storage.get(dateKey);

  if (storage) {
    // We got the puzzle from storage
    setPuzzle(storage);
    return false;
  } else {
    // We couldn't find a puzzle for today, must be a new day
    Storage.clear();

    // No storage, grab from the API
    fetch("/api/puzzle", {
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => {
        // Comes in encoded, decode it
        const puzzleString = window.atob(data.body.puzzle);

        // Parse it
        const puzzle = JSON.parse(puzzleString);

        // Store the string in storage
        Storage.set(dateKey, puzzle);

        // Update state
        setPuzzle(puzzle);
      })
      .catch((err) => console.error("Error:", err));
    return true;
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
      return "You got 2 in one Category, and 2 in another";
    case 3:
      return "You have 2 in one Category, and split the other 2";
    case 4:
      return "All four of those guesses belong to different categories";
  }
};
