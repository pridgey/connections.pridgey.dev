import type { JSX } from "solid-js";
import { children } from "solid-js";
import styles from "./Card.module.css";

type CardProps = {
  children: JSX.Element;
  active?: boolean;
  correct?: boolean;
  OnClick?: () => void;
};

export const Card = (props: CardProps) => {
  // Grab children to iterate
  const c = children(() => props.children);
  // Grab css classes
  const { card, selected, correct } = styles;
  return (
    <button
      classList={{
        [selected]: props.active,
        [correct]: props.correct,
        [card]: true,
      }}
      onClick={props.OnClick}
    >
      {c()}
    </button>
  );
};
