export const getTitle = () => {
  const titles = [
    "Great Job",
    "You're Doing Great!",
    "Well done",
    "So Proud Of You",
    "Killing It",
    "You're on Fire",
    "🔥🔥🔥",
    "Killer Job",
    "Way to Go",
    "Super Duper",
    "You've Got This",
  ];

  return titles[Math.round(Math.random() * titles.length - 1)];
};
