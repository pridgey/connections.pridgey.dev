import { Portal } from "solid-js/web";
import styles from "./Rules.module.css";
import { ExampleBoard } from "./Example";

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
            16 words are arranged randomly on the board with the goal to
            organize these words into 4 categories, each with 4 words in them.
            An example board is below:
          </p>
          <ExampleBoard />
          <p class={body}>
            There may be some words that can fit in multiple categories. This is
            tricky, and can throw you off. Despite these deceptive words, there
            should be only one arrangement for each category to contain the
            intended 4 words.
          </p>
          <p class={body}>
            Take a look at the board and try to find the connections. Select
            words by tapping on them and when you're confident, tap "Submit".
            Your total number of guesses will be tallied on the lower left of
            the baord.
          </p>
        </div>
      </div>
    </Portal>
  );
};
