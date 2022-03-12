import { Category, CategoryWord } from "./Board";

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
  const storage = localStorage.getItem(dateKey);

  if (storage) setPuzzle(JSON.parse(storage));

  // We couldn't find a puzzle for today, must be a new day
  localStorage.clear();

  // No storage, grab from the API
  fetch("/api/puzzle", {
    method: "post",
  })
    .then((res) => res.json())
    .then((data) => {
      const puzzleString = atob(data.body.puzzle);

      // Store the string in storage
      localStorage.setItem(dateKey, puzzleString);

      // Update state
      setPuzzle(JSON.parse(puzzleString || ""));
    });
};
