import { For, createSignal } from "solid-js";
import { Dialog } from "@components";
import { Storage } from "@utilities";
import styles from "./WinDialog.module.css";

type WinDialogProps = {
  OnClose: () => void;
};

export const WinDialog = (props: WinDialogProps) => {
  // Grab styles
  const { bar, week } = styles;
  // stats
  const [stats] = createSignal(Storage.get("consta"));

  console.log({ stats: stats() });

  return (
    <Dialog
      Title="Great Job"
      OnClose={props.OnClose}
      Body={
        <div class={week} style={{ "--days": stats().lastSevenDays.length }}>
          {/* First is the bars */}
          <For each={Array.from(Array(stats().lastSevenDays.length).keys())}>
            {(i) => {
              const val = stats().lastSevenDays[Number(i)] || 0;
              console.log({ day: stats().lastSevenDays[Number(i)], val });
              const max = Math.max(...stats().lastSevenDays);
              console.log({ max });
              const percentage =
                max === 0 ? 0 : (Number(val) / Number(max)) * 100 || 1;
              console.log({ percentage });

              return (
                <div
                  class={bar}
                  style={{ "--bar-height": `${percentage}%` }}
                ></div>
              );
            }}
          </For>
          {/* Next is the labels */}
          <For each={Array.from(Array(stats().lastSevenDays.length).keys())}>
            {(_, i) => <div>{i}</div>}
          </For>
        </div>
      }
    />
  );
};
