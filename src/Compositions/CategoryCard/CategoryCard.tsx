import { For, createSignal, Show, createEffect } from "solid-js";
import styles from "./CategoryCard.module.css";
import { Card } from "@components";

type CategoryCardProps = {
  Words: string[];
  Category: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  // Card's font size (helpful for text that overflows)
  const [fontSize, setFontSize] = createSignal(26);
  // Whether or not to show the category overlay
  const [showCategory, setShowCategory] = createSignal(true);
  // Grab styles
  const { container, categoryOverlay, categoryContainer } = styles;

  // Category element ref
  let categoryElement: any;

  // Check and see if text is overflowing, reduce as necessary
  createEffect(() => {
    const { scrollWidth, clientWidth } = categoryElement;
    if (scrollWidth > clientWidth) {
      setFontSize(fontSize() - 1);
    }
  });

  return (
    <button class={container} onClick={() => setShowCategory(!showCategory())}>
      <For each={props.Words}>
        {(word) => <Card correct={true}>{word}</Card>}
      </For>
      <Show when={showCategory()}>
        <div
          class={categoryOverlay}
          ref={categoryElement}
          style={{ "--font-size": `${fontSize()}px` }}
        >
          <div class={categoryContainer}>{props.Category}</div>
        </div>
      </Show>
    </button>
  );
};
