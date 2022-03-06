import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Board } from "./Board";
import { Header } from "./Header";

const App: Component = () => {
  return (
    <main class={styles.main}>
      <Header />
      <Board />
    </main>
  );
};

export default App;
