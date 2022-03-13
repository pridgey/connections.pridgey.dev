import { createSignal, Show } from "solid-js";

import styles from "./App.module.css";
import { Board } from "./Board";
import { Header } from "./Header";
import { Rules } from "./Rules";
import { LeaderBoard } from "./Leaderboard";
import { IconButton } from "./IconButton";
import { Storage } from "./Utilities";

const App = () => {
  const [showRules, setShowRules] = createSignal(
    JSON.parse(localStorage.getItem("conrr") ?? "true")
  );
  const [showStats, setShowStats] = createSignal(false);

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
      </header>
      <Board />
      <Show when={showRules()}>
        <Rules
          OnClose={() => {
            setShowRules(false);
            Storage.set("conrr", false);
          }}
        />
      </Show>
      <Show when={showStats()}>
        <LeaderBoard OnClose={() => setShowStats(false)} />
      </Show>
    </main>
  );
};

export default App;
