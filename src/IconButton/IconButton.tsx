import { Switch, Match } from "solid-js";
import styles from "./IconButton.module.css";
import { TropheyIcon } from "./TropheyIcon";
import { LawIcon } from "./LawIcon";

type IconButtonProps = {
  OnClick: () => void;
  Icon: "trophy" | "law";
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
    </Switch>
  </button>
);
