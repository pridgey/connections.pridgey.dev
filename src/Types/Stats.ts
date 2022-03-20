export type LastSevenDaysProps = {
  date: string;
  guesses: number;
};

export type StatsProps = {
  lastSevenDays: LastSevenDaysProps[];
  winsByGuessNum: number[];
};
