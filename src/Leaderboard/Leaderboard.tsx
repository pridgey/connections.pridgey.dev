import { Portal } from "solid-js/web";
import styles from "./../Rules/Rules.module.css";

type LeaderBoardProps = {
  OnClose: () => void;
};

export const LeaderBoard = (props: LeaderBoardProps) => {
  const { back, dialog, title, body, header, close } = styles;

  return (
    <Portal>
      <div class={back}>
        <div class={dialog}>
          <div class={header}>
            <h1 class={title}>You're Doing Great!</h1>
            <button class={close} onClick={props.OnClose}>
              X
            </button>
          </div>
          <p class={body}>Stats not yet available</p>
        </div>
      </div>
    </Portal>
  );
};
