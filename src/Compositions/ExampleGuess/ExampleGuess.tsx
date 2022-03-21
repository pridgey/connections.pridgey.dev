import styles from "./ExampleGuess.module.css";

export const ExampleGuess = () => {
  const { category, container, guessitem, text } = styles;

  return (
    <div class={container}>
      <div class={guessitem} style={{ "grid-area": "one" }}>
        Robin
      </div>
      <div class={guessitem} style={{ "grid-area": "two" }}>
        Penguin
      </div>
      <span class={text} style={{ "grid-area": "three" }}>
        Could be either
      </span>
      <div class={category} style={{ "grid-area": "four" }}>
        Batman Characters
      </div>
      <span class={text} style={{ "grid-area": "or" }}>
        or
      </span>
      <div class={category} style={{ "grid-area": "five" }}>
        Birds
      </div>
    </div>
  );
};
