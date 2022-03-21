import styles from "./Button.module.css";

type ButtonProps = {
  Disabled?: boolean;
  Text: string;
  OnClick: () => void;
  OnDisabledClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { disabled, button } = styles;

  return (
    <button
      onClick={() => {
        if (props.Disabled) {
          props.OnDisabledClick?.();
        } else {
          props.OnClick();
        }
      }}
      class={button}
      classList={{ [disabled]: props.Disabled }}
    >
      {props.Text}
    </button>
  );
};
