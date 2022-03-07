import type { JSX } from "solid-js";
import { children } from "solid-js";
import { card, selected, correct } from "./Card.module.css";

type CardProps = {
  children: JSX.Element;
  active?: boolean;
  correct?: boolean;
  OnClick?: () => void;
};

export const Card = (props: CardProps) => {
  const c = children(() => props.children);
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
