import styles from "./SettingToggle.module.css";
import { ExampleBoard, ExampleGuess } from "@compositions";
import { Dialog } from "@components";

type SettingToggleProps = {
  SettingName: string;
};

export const SettingToggle = (props: SettingToggleProps) => {
  // Grab the body styles for the text
  const { toggle } = styles;

  return (
    <label class={toggle}>
      <input type="checkbox" name="checkbox" />
      {props.SettingName}
    </label>
  );
};
