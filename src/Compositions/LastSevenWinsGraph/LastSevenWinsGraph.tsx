import { createSignal, For, onMount } from "solid-js";
import styles from "./LastSevenWinsGraph.module.css";
import { Storage } from "@utilities";
import { GraphBar } from "@components";

export const LastSevenWinsGraph = () => {
  // setup state for data
  const [stats, setStats] = createSignal<any[]>([]);
  // get max stat for bar percentages
  const [maxVal, setMaxVal] = createSignal();

  // On mount grab the data
  onMount(() => {
    const store = Storage.get("consta");

    // if we have value in storage, put it in state
    if (store?.lastSevenDays) {
      setStats(store.lastSevenDays);
      setMaxVal(Math.max(...store.lastSevenDays.map((i: any) => i.guesses)));
    }
  });

  // Grab the styles for the graph
  const { container, title, week } = styles;

  return (
    <div class={container}>
      <h2 class={title}>Last 7 Puzzles</h2>
      <div class={week} style={{ "--days": stats().length }}>
        {/* First is the bars */}
        <For each={stats()}>
          {(i) => {
            // Determine debug
            const debug = Storage.debug("stats");
            // This bar's value
            const val = i.guesses;
            // This bar's label
            const date = i.date;
            // Figure out how high the percentage of this bar should be (if the answer is zero we'll do 1%, just to show something)
            const percentage =
              maxVal() === 0 ? 0 : (Number(val) / Number(maxVal())) * 100 || 1;
            // Show debug info if requested
            debug &&
              console.log({
                step: "Last Seven Days",
                datum: i,
                val,
                date,
                percentage,
              });

            // render a bar that will grow to a nice percentage
            return (
              <GraphBar
                Value={val}
                Percentage={`${percentage}%`}
                Label={date}
                Highlighted={i === stats()[stats().length - 1]}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
