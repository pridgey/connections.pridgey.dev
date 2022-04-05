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
  // Card's font size (helpful for text that overflows)
  const [fontSize, setFontSize] = createSignal(14);
  // Grab children to iterate
  const c = children(() => props.children);
  // Grab css classes
  const { card, container, selected, correct, incorrect } = styles;
  // Card ref
  let cardElement: any;

  createEffect(() => {
    const { scrollWidth, clientWidth } = cardElement;
    if (scrollWidth > clientWidth) {
      setFontSize(fontSize() - 1);
    }
  });

  if (props.correct) {
    return (
      <div
        classList={{
          [selected]: props.active,
          [correct]: props.correct,
          [card]: true,
          [incorrect]: props.incorrect,
        }}
        onClick={props.OnClick}
      >
        <div
          class={container}
          ref={cardElement}
          style={{ "--font-size": `${fontSize()}px` }}
        >
          {c()}
        </div>
      </div>
    );
  }
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
      <div
        class={container}
        ref={cardElement}
        style={{ "--font-size": `${fontSize()}px` }}
      >
        {c()}
      </div>
    </button>
  );
};
