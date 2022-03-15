import styles from "./RulesDialog.module.css";
import { ExampleBoard } from "@compositions";
import { Dialog } from "@components";

type RulesProps = {
  OnClose: () => void;
};

export const RulesDialog = (props: RulesProps) => {
  // Grab the body styles for the text
  const { body } = styles;

  return (
    <Dialog
      Title="How To Play"
      OnClose={props.OnClose}
      Body={
        <>
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
        </>
      }
    />
  );
};
