import styles from "./GuessButton.module.css";

type GuessButtonProps = {
  Disabled: boolean;
  OnClick: () => void;
  OnDisabledClick: () => void;
};

export const GuessButton = (props: GuessButtonProps) => {
  const { disabled, guessButton } = styles;

  return (
    <button
      onClick={() => {
        if (props.Disabled) {
          props.OnDisabledClick();
        } else {
          props.OnClick();
        }
      }}
      class={guessButton}
      classList={{ [disabled]: props.Disabled }}
    >
      SUBMIT
    </button>
  );
};
