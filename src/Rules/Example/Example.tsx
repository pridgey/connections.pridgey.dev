import { For } from "solid-js";
import styles from "./Example.module.css";

export const ExampleBoard = () => {
  const { miniboard, minisquare, selected } = styles;

  const values = Array(16).fill(0);
  const chosen: number[] = [];
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
