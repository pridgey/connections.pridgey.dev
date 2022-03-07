import styles, { disabled } from "./GuessButton.module.css";

type GuessButtonProps = {
  Disabled: boolean;
  OnClick: () => void;
  OnDisabledClick: () => void;
};

export const GuessButton = (props: GuessButtonProps) => (
  <button
    onClick={() => {
      if (props.Disabled) {
        props.OnDisabledClick();
      } else {
        props.OnClick();
      }
    }}
    class={styles.guessButton}
    classList={{ [disabled]: props.Disabled }}
  >
    SUBMIT
  </button>
);
