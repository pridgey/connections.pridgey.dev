import type { Component } from "solid-js";
import { For, createSignal, createEffect } from "solid-js";
import { Card } from "./Card";
import styles from "./Board.module.css";
import shuffle from "lodash.shuffle";

const words = [
  "Garfield",
  "Polk",
  "Bush",
  "Odie",
  "Scrappy",
  "Clifford",
  "Lincoln",
  "Data",
  "Natural",
  "Ardent",
  "Fierce",
  "Aggressive",
];

export const Board: Component = () => {
  const [activeWords, setActiveWords] = createSignal<string[]>([]);

  createEffect(() => console.log(activeWords()));

  return (
    <div class={styles.board}>
      <For each={shuffle(words)}>
        {(cardWord) => (
          <Card
            onClick={() => {
              if (activeWords().includes(cardWord)) {
                const index = activeWords().indexOf(cardWord);
                const words = activeWords();
                words.splice(index, 1);
                setActiveWords([...words]);
              } else {
                const words = activeWords();
                words.push(cardWord);
                setActiveWords([...words]);
              }
            }}
            active={activeWords().includes(cardWord)}
          >
            {cardWord}
          </Card>
        )}
      </For>
    </div>
  );
};
