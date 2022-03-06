import type { Component, JSX } from "solid-js";
import { children } from "solid-js";
import { card, selected } from "./Card.module.css";

type CardProps = {
  children: JSX.Element;
  active: boolean;
  onClick: () => void;
};

export const Card = (props: CardProps) => {
  const c = children(() => props.children);
  return (
    <button
      classList={{ [selected]: props.active }}
      onClick={props.onClick}
      class={card}
    >
      {c()}
    </button>
  );
};
