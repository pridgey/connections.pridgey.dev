import { LastSevenDaysProps } from "@types";
import { Storage } from "@utilities";

export const organizeStats = (stats: LastSevenDaysProps[]) => {
  // Type that we will return
  type SevenDayStats = {
    Label: string;
    Value: number;
    Percentage: string;
  };

  // Resulting array
  let results: SevenDayStats[] = [];

  // Max value of stats
  const maxVal = Math.max(...stats.map((i: LastSevenDaysProps) => i.guesses));

  // Iterate through array and pull out what we need
  stats.forEach((s) => {
    // Determine debug
    const debug = Storage.debug("stats");
    // This bar's value
    const val = s.guesses;
    // This bar's label
    const date = new Date(s.date);
    // Figure out how high the percentage of this bar should be (if the answer is zero we'll do 1%, just to show something)
    const percentage =
      maxVal === 0 ? 0 : (Number(val) / Number(maxVal)) * 59 || 1;
    // Show debug info if requested
    debug &&
      console.log({
        step: "Last Seven Days",
        datum: s,
        val,
        date,
        percentage,
      });

    // Add to the array
    results.push({
      Label: `${date.getMonth() + 1}/${date.getDate()}`,
      Value: val,
      Percentage: `${percentage}px`,
    });
  });

  // Ensure we have 7 items
  if (results.length < 7) {
    while (results.length !== 7) {
      results.unshift({
        Label: "-",
        Value: 0,
        Percentage: "1px",
      });
    }
  }

  return results;
};
