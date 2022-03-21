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
        </>
      }
    />
  );
};
