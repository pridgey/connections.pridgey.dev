import { createSignal, Show } from "solid-js";

import styles from "./App.module.css";
import { Board } from "./Board";
import { Header } from "./Header";
import { Rules } from "./Rules";

const App = () => {
  const [showRules, setShowRules] = createSignal(true);
  return (
    <main class={styles.main}>
      <Header />
      <Board />
      <Show when={showRules()}>
        <Rules OnClose={() => setShowRules(false)} />
      </Show>
    </main>
  );
};

export default App;
