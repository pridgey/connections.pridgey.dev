import { createSignal, For, onMount } from "solid-js";
import styles from "./LastSevenWinsGraph.module.css";
import { Storage } from "@utilities";
import { GraphBar } from "@components";
import { organizeStats } from "./LastSevenWinsGraph.functions";

export const LastSevenWinsGraph = () => {
  // setup state for data
  const [stats, setStats] = createSignal<any[]>([]);

  // On mount grab the data
  onMount(() => {
    const store = Storage.get("consta");

    // if we have value in storage, put it in state
    if (store?.lastSevenDays) {
      setStats(store.lastSevenDays);
    }
  });

  // Grab the styles for the graph
  const { container, title, week } = styles;

  return (
    <div class={container}>
      <h2 class={title}>Last 7 Puzzles</h2>
      <div class={week}>
        {/* First is the bars */}
        <For each={organizeStats(stats())}>
          {(i, index) => (
            <GraphBar
              Value={i.Value.toString()}
              Percentage={i.Percentage}
              Label={i.Label}
              Highlighted={index() === 6}
            />
          )}
        </For>
      </div>
    </div>
  );
};
