import { Switch, Match } from "solid-js";
import styles from "./IconButton.module.css";
import { TropheyIcon } from "./TropheyIcon";
import { LawIcon } from "./LawIcon";
import { ShuffleIcon } from "./ShuffleIcon";
import { SettingsIcon } from "./SettingsIcon";

type IconButtonProps = {
  OnClick: () => void;
  Icon: "trophy" | "law" | "shuffle" | "settings";
};

export const IconButton = (props: IconButtonProps) => (
  <button class={styles.iconbutton} onClick={props.OnClick}>
    <Switch>
      <Match when={props.Icon === "trophy"}>
        <TropheyIcon />
      </Match>
      <Match when={props.Icon === "law"}>
        <LawIcon />
      </Match>
      <Match when={props.Icon === "shuffle"}>
        <ShuffleIcon />
      </Match>
      <Match when={props.Icon === "settings"}>
        <SettingsIcon />
      </Match>
    </Switch>
  </button>
);
