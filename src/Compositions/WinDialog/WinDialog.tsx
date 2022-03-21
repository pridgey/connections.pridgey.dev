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
  const userHasWon = true; // Storage.get("conwg")?.length === 4;
  // Button state
  const [tempButtonText, setTempButtonText] = createSignal("");
  // We need to determine if the user is viewing this in a browser that can share
  const inApp = ["FBAN", "FBAV"].includes(navigator.userAgent);

  let buttonTimeout: NodeJS.Timeout;

  createEffect(() => {
    if (tempButtonText()) {
      buttonTimeout = setTimeout(() => {
        setTempButtonText("");
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
                // Grab the guesses from storage
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

                // Share and clipboard aren't always available, so we have fallbacks
                if ("share" in window.navigator) {
                  // Share exists, so let's do that!
                  navigator.share({
                    text: winText,
                  });
                } else if ("clipboard" in navigator) {
                  navigator.clipboard.writeText(winText);
                  setTempButtonText("COPIED TO CLIPBOARD");
                } else {
                  // Okay we'll try the hacky way
                  const ta = document.createElement("textarea");
                  ta.value = winText;
                  ta.id = "temp-copy";
                  ta.style.opacity = "0";
                  document.body.appendChild(ta);
                  ta.focus();
                  ta.select();
                  try {
                    document.execCommand("copy");
                    setTempButtonText("GOT IT");
                  } catch (err) {
                    console.error("Copy Failed:", err);
                  }
                  document.getElementById("temp-copy")?.remove();
                }
              }}
              Text={tempButtonText() || "SHARE WIN"}
            />
          </Show>
          <LastSevenWinsGraph />
          <GuessGraph UserHasWon={userHasWon} />
        </div>
      }
    />
  );
};
