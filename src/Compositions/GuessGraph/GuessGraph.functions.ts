export const organizeDistribution = (stats: number[]) => {
  // First things first, get rid of the first 3 as no one will ever guess the puzzle in 0, 1 or 2 attempts
  const chopped = stats.slice(3);

  type Results = {
    label: string;
    value: number;
  };

  // Next we'll go through it and combine any gaps in the distribution
  let results: Results[] = [];
  let lastIndexWithValue = 2;
  let lastIndexWithoutValue = 0;
  chopped.forEach((i, index) => {
    if (i) {
      // We have a value
      // First we need to fill any gaps that may have occurred between these
      if (index + 2 === lastIndexWithoutValue) {
        // Our last value was empty
        const label: string =
          lastIndexWithValue + 1 === lastIndexWithoutValue
            ? lastIndexWithoutValue.toString()
            : `${lastIndexWithValue + 1}-${lastIndexWithoutValue}`;
        results.push({
          label,
          value: 0,
        });
      }
      // Now we can add the actual value we found
      lastIndexWithValue = index + 3;
      results.push({
        label: lastIndexWithValue.toString(),
        value: i,
      });
    } else {
      // There is no value
      lastIndexWithoutValue = index + 3;
    }
  });

  // Finally if we have more than 10 items, we combine everything after 10
  if (results.length > 10) {
    const first = results.slice(0, 9);
    const summedValues = results
      .slice(10)
      .reduce((partialSum, a) => partialSum + a.value, 0);
    const finalLabel = results[10].label.includes("-")
      ? results[10].label.split("-")[0]
      : results[10].label;
    first.push({
      label: `${finalLabel}+`,
      value: summedValues,
    });
    results = [...first];
  }

  return results;
};
