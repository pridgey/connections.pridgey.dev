import { Switch, Match } from "solid-js";
import styles from "./IconButton.module.css";
import { TropheyIcon } from "./TropheyIcon";
import { LawIcon } from "./LawIcon";
import { ShuffleIcon } from "./ShuffleIcon";

type IconButtonProps = {
  OnClick: () => void;
  Icon: "trophy" | "law" | "shuffle";
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
    </Switch>
  </button>
);
