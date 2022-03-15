import { For, createSignal, Show } from "solid-js";
import styles from "./CategoryCard.module.css";
import cardStyles from "./../../Components/Card/Card.module.css";

type CategoryCardProps = {
  Words: string[];
  Category: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  const { container, correct, categoryOverlay } = styles;
  const { card } = cardStyles;

  const [showCategory, setShowCategory] = createSignal(true);

  return (
    <button class={container} onClick={() => setShowCategory(!showCategory())}>
      <For each={props.Words}>
        {(word) => (
          <div classList={{ [card]: true, [correct]: true }}>{word}</div>
        )}
      </For>
      <Show when={showCategory()}>
        <div class={categoryOverlay}>{props.Category}</div>
      </Show>
    </button>
  );
};
