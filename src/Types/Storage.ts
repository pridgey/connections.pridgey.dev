import type { Category, CategoryWord } from "../Compositions";

export type StorageState = {
  currentPuzzleIndex: number;
  lastPuzzleStarted: Date;
  lastPuzzleComplete?: Date;
  puzzle: Category[];
  numberOfGuesses: number;
  correctGuesses: Category[];
  currentGuesses: CategoryWord[];
  incorrectGuesses: CategoryWord[];
  board: Category[];
};
