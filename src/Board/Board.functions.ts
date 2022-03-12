import { Category, CategoryWord } from "./Board";
import atob from "atob";
import { Storage } from "./../Utilities";

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

  if (storage) setPuzzle(storage);

  // We couldn't find a puzzle for today, must be a new day
  localStorage.clear();

  // No storage, grab from the API
  fetch("/api/puzzle", {
    method: "post",
  })
    .then((res) => res.json())
    .then((data) => {
      // Comes in encoded, decode it
      console.log("data.body.puzzle");
      const puzzleString = atob(data.body.puzzle);

      console.log("After decode");

      // Store the string in storage
      Storage.set(dateKey, puzzleString);

      // Update state
      setPuzzle(JSON.parse(puzzleString || ""));
    });
};
