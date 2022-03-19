import styles from "./GraphBar.module.css";

type GraphBarProps = {
  Highlighted?: boolean;
  Label: string;
  Percentage: string;
  Value: string;
};

export const GraphBar = (props: GraphBarProps) => {
  // Grab styles
  const { bar, barcontainer, bartext, barvalue, highlight } = styles;

  return (
    <div class={barcontainer}>
      <span class={barvalue}>{props.Value}</span>
      <div
        classList={{
          [bar]: true,
          [highlight]: props.Highlighted,
        }}
        class={bar}
        style={{ "--bar-height": props.Percentage }}
      ></div>
      <span class={bartext}>{props.Label}</span>
    </div>
  );
};
