import { Portal } from "solid-js/web";
import type { JSX } from "solid-js";
import styles from "./Dialog.module.css";

type DialogProps = {
  Title: string;
  Body: JSX.Element;
  OnClose: () => void;
};

export const Dialog = (props: DialogProps) => {
  // Extract Dialog styles
  const { back, body, dialog, title, header, close } = styles;

  return (
    <Portal>
      <div class={back}>
        <div class={dialog}>
          <div class={header}>
            <h1 class={title}>{props.Title}</h1>
            <button class={close} onClick={props.OnClose}>
              X
            </button>
          </div>
          <div class={body}>{props.Body}</div>
        </div>
      </div>
    </Portal>
  );
};
