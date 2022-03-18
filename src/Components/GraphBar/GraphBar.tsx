import styles from "./GraphBar.module.css";

type GraphBarProps = {
  Percentage: string;
  Value: string;
  Label: string;
};

export const GraphBar = (props: GraphBarProps) => {
  // Grab styles
  const { bar, barcontainer, bartext, barvalue } = styles;

  return (
    <div class={barcontainer}>
      <span class={barvalue}>{props.Value}</span>
      <div class={bar} style={{ "--bar-height": props.Percentage }}></div>
      <span class={bartext}>{props.Label}</span>
    </div>
  );
};
