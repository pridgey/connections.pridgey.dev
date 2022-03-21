import { For } from "solid-js";
import styles from "./Confetti.module.css";
import { generateConfetti } from "./Confetti.functions";

type ConfettiProps = {
  Title: string;
};

export const Confetti = (props: ConfettiProps) => {
  // Grab container styles
  const { bit, container } = styles;

  return (
    <div class={container}>
      <For each={generateConfetti()}>
        {(i) => (
          <div
            class={bit}
            style={{
              "--delay": i.Delay,
              "--color": i.Color,
              "--left": i.Left,
              "--duration": i.Duration,
              "--size": i.Size,
            }}
          ></div>
        )}
      </For>
      <h2>{props.Title}</h2>
    </div>
  );
};
