import styles from "./SettingsDialog.module.css";
import { Dialog, SettingToggle } from "@components";

type SettingsDialogProps = {
  OnClose: () => void;
};

export const SettingsDialog = (props: SettingsDialogProps) => {
  // Grab the body styles for the text
  const { body, example } = styles;

  return (
    <Dialog
      Title="Configure Settings"
      OnClose={props.OnClose}
      Body={
        <>
          <SettingToggle SettingName="Test Setting" />
        </>
      }
    />
  );
};
