import { For } from "solid-js";
import styles from "./ExampleBoard.module.css";

export const ExampleBoard = () => {
  // Mini board styles
  const { miniboard, minisquare, selected } = styles;

  // We just need a simple array of nothing
  const values = Array(16).fill(0);
  // This array contains the 4 filled squares
  const chosen: number[] = [];
  // Randomly chose the 4 squares
  while (chosen.length < 4) {
    const index = Math.round(Math.random() * values.length - 1);
    if (!chosen.includes(index)) {
      chosen.push(index);
      values[index] = 1;
    }
  }

  return (
    <div class={miniboard}>
      <For each={values}>
        {(v) => (
          <div
            classList={{
              [minisquare]: true,
              [selected]: v === 1,
            }}
          ></div>
        )}
      </For>
    </div>
  );
};
