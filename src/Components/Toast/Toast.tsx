import styles from "./Toast.module.css";
import { Portal } from "solid-js/web";

type ToastProps = {
  Text: string;
};

export const Toast = (props: ToastProps) => {
  const { container, toast } = styles;

  return (
    <Portal>
      <div class={container}>
        <div class={toast}>{props.Text}</div>
      </div>
    </Portal>
  );
};
