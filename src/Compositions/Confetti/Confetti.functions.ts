export const generateConfetti = () => {
  type bit = {
    Left: string;
    Color: string;
    Delay: string;
    Duration: string;
    Size: string;
    RotationStart: string;
    RotationEnd: string;
    Sway: string;
  };

  const iterations = Math.round(Math.random() * 70 + 50);

  const maxDelay = 5;

  const maxDuration = 7;
  const minDuration = 3;

  const minSize = 4;
  const maxSize = 6;

  const rotMin = -500;
  const rotMax = 500;

  const swayMin = 5;
  const swayMax = 15;

  const results = [];

  for (let i = 0; i < iterations; i++) {
    results.push({
      Left: `${Math.random() * 100}%`,
      Color: `hsl(${Math.round(Math.random() * 360)}, 75%, 75%)`,
      Delay: `${Math.random() * maxDelay * (Math.random() ? 1 : -1)}s`,
      Duration: `${Math.random() * maxDuration + minDuration}s`,
      Size: `${Math.random() * maxSize + minSize}px`,
      RotationStart: `${Math.random() * rotMin}deg`,
      RotationEnd: `${Math.random() * rotMax}deg`,
      Sway: `${Math.random() * swayMax + swayMin}px`,
    });
  }

  return results;
};
