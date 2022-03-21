import { Storage } from "@utilities";

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

export const getWinText = () => {
  // Grab the guesses from storage
  const g = Storage.get("conng");
  const today = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const winText = `⏹️ Connections\r\n🎉 ${
    months[today.getMonth()]
  } ${today.getDate()} - ${g || "1,000,000"} guesses`;

  return winText;
};

export const hackyCopyText = (text: string) => {
  // Hacky way of copying text, might not work forever
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.id = "temp-copy";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
    return true;
  } catch (err) {
    console.error("Copy Failed:", err);
    return false;
  } finally {
    document.getElementById("temp-copy")?.remove();
  }
};
