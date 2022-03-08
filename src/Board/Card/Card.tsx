import type { JSX } from "solid-js";
import { children, createSignal, createEffect } from "solid-js";
import styles from "./Card.module.css";

type CardProps = {
  children: JSX.Element;
  active?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  OnClick?: () => void;
};

export const Card = (props: CardProps) => {
  // Grab children to iterate
  const c = children(() => props.children);
  // Grab css classes
  const { card, selected, correct, incorrect } = styles;

  return (
    <button
      classList={{
        [selected]: props.active,
        [correct]: props.correct,
        [card]: true,
        [incorrect]: props.incorrect,
      }}
      onClick={props.OnClick}
    >
      {c()}
    </button>
  );
};
