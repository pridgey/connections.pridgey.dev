import styles from "./RulesDialog.module.css";
import { ExampleBoard, ExampleGuess } from "@compositions";
import { Dialog } from "@components";

type RulesProps = {
  OnClose: () => void;
};

export const RulesDialog = (props: RulesProps) => {
  // Grab the body styles for the text
  const { body, example } = styles;

  return (
    <Dialog
      Title="How To Play"
      OnClose={props.OnClose}
      Body={
        <>
          <p class={body}>
            Fit 16 words into 4 groups of 4 words each by selecting 4 words at a
            time.
          </p>
          <p class={body}>
            Some words can fit in multiple groups, but there is one answer that
            fits all 16.
          </p>
          <p class={body}>Example:</p>
          <div class={example}>
            <ExampleBoard />
            <ExampleGuess />
          </div>
          <p class={body}>
            Connections will keep pace with you! You'll be given one puzzle at a
            time, and can take as many guesses, and as many days, as you need to
            solve it.
          </p>
          <p class={body}>
            Once you finally conquer it, come back the next day for a new
            puzzle. You will only get a new puzzle after completing the current
            one, and only the day after completing it.
          </p>
          <p class={body}>
            All data is stored in your browser's storage. Connections does not
            store any data about you. This does mean your data will change
            device to device and browser to browser.
          </p>
          <p class={body}>
            Please send any and all feedback to connections@pridgey.dev
          </p>
        </>
      }
    />
  );
};
