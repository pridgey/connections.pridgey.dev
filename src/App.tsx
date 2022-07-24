import { createSignal, Show } from "solid-js";

import styles from "./App.module.css";
import {
  Board,
  Header,
  SettingsDialog,
  RulesDialog,
  WinDialog,
} from "@compositions";
import { IconButton } from "@components";
import { Storage } from "@utilities";

const App = () => {
  const [showRules, setShowRules] = createSignal(Storage.get("conrr") ?? true);
  const [showStats, setShowStats] = createSignal(false);
  const [showSettings, setShowSettings] = createSignal(false);

  return (
    <main class={styles.main}>
      <header class={styles.header}>
        <Header />
        <div class={styles.stats}>
          <IconButton OnClick={() => setShowStats(true)} Icon="trophy" />
        </div>
        <div class={styles.rules}>
          <IconButton OnClick={() => setShowRules(true)} Icon="law" />
        </div>
        <div class={styles.settings}>
          <IconButton OnClick={() => setShowSettings(true)} Icon="settings" />
        </div>
      </header>
      <Board />
      <Show when={showRules()}>
        <RulesDialog
          OnClose={() => {
            setShowRules(false);
            Storage.set("conrr", false);
          }}
        />
      </Show>
      <Show when={showStats()}>
        <WinDialog OnClose={() => setShowStats(false)} />
      </Show>
      <Show when={showSettings()}>
        <SettingsDialog OnClose={() => setShowSettings(false)} />
      </Show>
    </main>
  );
};

export default App;
