import { createEffect, createSignal, Show, onCleanup } from "solid-js";
import { Dialog, Button } from "@components";
import { Confetti, GuessGraph, LastSevenWinsGraph } from "@compositions";
import styles from "./WinDialog.module.css";
import { getTitle, getWinText } from "./WinDialog.functions";
import { Storage } from "@utilities";

type WinDialogProps = {
  OnClose: () => void;
};

export const WinDialog = (props: WinDialogProps) => {
  // Has the user won today's game
  const userHasWon = Storage.get("conwg")?.length === 4;
  // Button state
  const [tempButtonText, setTempButtonText] = createSignal("");
  // Copy paste fallback
  const [showFallback, setShowFallback] = createSignal(false);

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
            {/* Copy / Paste fallback */}
            <Show when={showFallback()}>
              Looks like Sharing is disabled. Copy this text:
              {getWinText()}
            </Show>
            {/* Normal button */}
            <Show when={!showFallback()}>
              <Button
                OnClick={() => {
                  const winText = getWinText();

                  // Share and clipboard aren't always available, so we have fallbacks
                  if ("share" in window.navigator) {
                    // Share exists, so let's do that!
                    navigator.share({
                      text: winText,
                    });
                  } else if ("clipboard" in window.navigator) {
                    // Share failed, but we can try just copying the text
                    navigator.clipboard.writeText(winText);
                    setTempButtonText("COPIED TO CLIPBOARD");
                  } else if (document.execCommand) {
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
                      setTempButtonText("COPIED");
                    } catch (err) {
                      console.error("Copy Failed:", err);
                    }
                    document.getElementById("temp-copy")?.remove();
                  } else {
                    setShowFallback(true);
                  }
                }}
                Text={tempButtonText() || "SHARE WIN"}
              />
            </Show>
          </Show>
          <LastSevenWinsGraph />
          <GuessGraph UserHasWon={userHasWon} />
        </div>
      }
    />
  );
};
