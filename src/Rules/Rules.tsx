import { Portal } from "solid-js/web";
import styles from "./Rules.module.css";

type RulesProps = {
  OnClose: () => void;
};

export const Rules = (props: RulesProps) => {
  const { back, dialog, title, body, header, close } = styles;

  return (
    <Portal>
      <div class={back}>
        <div class={dialog}>
          <div class={header}>
            <h1 class={title}>How To Play</h1>
            <button class={close} onClick={props.OnClose}>
              X
            </button>
          </div>
          <p class={body}>
            Every day there are 12 words / phrases on the board that need to be
            arranged into 4 categories, each with 3 words. They are randomly
            placed and arranged throughout the board.
          </p>
          <p class={body}>
            Some words may fit into multiple categories, but there will only be
            one way for all answers to fit their categories. This can mean there
            may be tricky words that will throw you off.
          </p>
          <p class={body}>
            Select 3 words, that you believe are connected together, by tapping
            on them and tapping "Submit". You may tap the words in any order.
            The number of total guesses will be tallied in the lower left.
          </p>
        </div>
      </div>
    </Portal>
  );
};
