import { For, createSignal, onMount } from "solid-js";
import styles from "./GuessGraph.module.css";
import { Storage } from "@utilities";
import { GraphBar } from "@components";
import { organizeDistribution } from "./GuessGraph.functions";

export const GuessGraph = () => {
  // State for the stats
  const [stats, setStats] = createSignal<any[]>([]);
  // max value for the percentages
  const [maxVal, setMaxVal] = createSignal();
  // number of guesses this game
  const [numGuesses, setNumGuesses] = createSignal<number>();

  // Grab the data onmount
  onMount(() => {
    const store = Storage.get("consta");
    const ng = Storage.get("conng");

    // If we have it, do it
    if (store?.winsByGuessNum) {
      setStats(store.winsByGuessNum);
      setMaxVal(Math.max(...store.winsByGuessNum));
    }

    if (ng) {
      setNumGuesses(ng);
    }
  });

  // Grab the styles
  const { container, distribution, title } = styles;

  return (
    <div class={container}>
      <h2 class={title}>Guess Distribution</h2>
      <div class={distribution}>
        <For each={organizeDistribution(stats())}>
          {(i) => {
            // Determine debug
            const debug = Storage.debug("stats");
            // This bar's guesses
            const val = i.value;
            // This bar's label
            const label = i.label;
            // The percentage of the bar
            const percentage =
              maxVal() === 0 ? 0 : (Number(val) / Number(maxVal())) * 59 || 1;
            // Show debug if requested
            debug &&
              console.log({
                step: "Guess Distribution",
                datum: i,
                val,
                label,
                percentage,
                guesses: numGuesses(),
              });

            // render the graph bar
            return (
              <GraphBar
                Value={val.toString()}
                Percentage={`${percentage}px`}
                Label={label}
                Highlighted={label === numGuesses()?.toString()}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
