export const generateConfetti = () => {
  type bit = {
    Left: string;
    Color: string;
    Delay: string;
    Duration: string;
    Size: string;
  };

  const iterations = Math.round(Math.random() * 50 + 30);

  const maxDelay = 5;

  const maxDuration = 10;
  const minDuration = 5;

  const minSize = 3;
  const maxSize = 6;

  const results = [];

  for (let i = 0; i < iterations; i++) {
    results.push({
      Left: `${Math.random() * 100}%`,
      Color: `hsl(${Math.round(Math.random() * 360)}, 50%, 50%)`,
      Delay: `${Math.random() * maxDelay * (Math.random() ? 1 : -1)}s`,
      Duration: `${Math.random() * maxDuration + minDuration}s`,
      Size: `${Math.random() * maxSize + minSize}px`,
    });
  }

  return results;
};
