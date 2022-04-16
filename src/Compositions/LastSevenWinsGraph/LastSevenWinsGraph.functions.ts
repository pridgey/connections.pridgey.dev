import { LastSevenDaysProps } from "@types";
import { Storage, Logging } from "@utilities";

export const organizeStats = (stats: LastSevenDaysProps[]) => {
  // Type that we will return
  type SevenDayStats = {
    Label: string;
    Value: number;
    Percentage: string;
  };

  // Logging
  const { log } = Logging();

  // Resulting array
  let results: SevenDayStats[] = [];

  // Max value of stats
  const maxVal = Math.max(...stats.map((i: LastSevenDaysProps) => i.guesses));

  // Iterate through array and pull out what we need
  stats.forEach((s) => {
    // This bar's value
    const val = s.guesses;
    // This bar's label
    const date = new Date(s.date);
    // Figure out how high the percentage of this bar should be (if the answer is zero we'll do 1%, just to show something)
    const percentage =
      maxVal === 0 ? 0 : (Number(val) / Number(maxVal)) * 59 || 1;
    // Show debug info if requested
    log(
      "Stats",
      {
        step: "Last Seven Days",
        datum: s,
        val,
        date,
        percentage,
      }.toString()
    );

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
