import { createEffect, createSignal, Show, onCleanup } from "solid-js";
import { Dialog, Button } from "@components";
import { Confetti, GuessGraph, LastSevenWinsGraph } from "@compositions";
import { Storage } from "@utilities";
import styles from "./WinDialog.module.css";
import { getTitle } from "./WinDialog.functions";

type WinDialogProps = {
  OnClose: () => void;
};

export const WinDialog = (props: WinDialogProps) => {
  // Has the user won today's game
  const userHasWon = Storage.get("conwg")?.length === 4;
  // Button state
  const [showCopiedMsg, setShowCopiedMsg] = createSignal(false);
  // We need to determine if the user is viewing this in a browser that can share
  const inApp = ["FBAN", "FBAV"].includes(navigator.userAgent);

  let buttonTimeout: NodeJS.Timeout;

  createEffect(() => {
    if (showCopiedMsg()) {
      buttonTimeout = setTimeout(() => {
        setShowCopiedMsg(false);
      }, 1500);
    }
  });

  onCleanup(() => clearTimeout(buttonTimeout));

  // Grab the styles
  const { layout } = styles;

  return (
    <Dialog
      Title={getTitle()}
      OnClose={props.OnClose}
      Body={
        <div class={layout}>
          <Show when={userHasWon}>
            <Confetti Title="Winner" />
            <Button
              OnClick={() => {
                setShowCopiedMsg(true);

                const g = Storage.get("conng");
                const today = new Date();

                const months = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ];

                const winText = `⏹️ Connections\r\n🎉 ${
                  months[today.getMonth()]
                } ${today.getDate()} - ${g || "1,000,000"} guesses`;

                navigator
                  .share({
                    text: winText,
                  })
                  .catch(() => {
                    navigator.clipboard.writeText(winText);
                  });

                //navigator.clipboard.writeText();
              }}
              Text={showCopiedMsg() ? "COPIED TO CLIPBOARD" : "SHARE WIN"}
            />
          </Show>
          <LastSevenWinsGraph />
          <GuessGraph UserHasWon={userHasWon} />
        </div>
      }
    />
  );
};
