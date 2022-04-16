import { Logging } from "./Logging";

export const Storage = {
  get: (key: string) => {
    const { log } = Logging();

    // Get the item from storage
    const store = localStorage.getItem(key);
    log("Storage", store || "");

    // Clean that string (basically just checks for common errors)
    let clean = cleanString(store || "");
    log("Storage", clean);

    // Decode the string to its actual value
    const decoded = window.atob(clean || "");
    log("Storage", decoded);

    // Clean it one more time, juuuuust in case
    const final = cleanString(decoded);
    log("Storage", final);

    // If we have a value at this point, parse it
    if (final) {
      const parsed = JSON.parse(final);
      log("Storage", parsed);
      return parsed;
    }

    return undefined;
  },
  set: (key: string, value: any) => {
    const { log } = Logging();

    // Encode the value
    const endcodedItem = window.btoa(encodeURIComponent(JSON.stringify(value)));

    log("Storage", endcodedItem);

    localStorage.setItem(key, endcodedItem);
  },
  clear: () => {
    const { log } = Logging();

    log("Storage", "Clear Storage");

    // Grab the things that should persist day to day
    let persist = [
      {
        id: "conrr", // Sets if the rules have been marked as read
        val: localStorage.getItem("conrr") || "",
      },
      {
        id: "consta", // Sets the stats for the user
        val: localStorage.getItem("consta") || "",
      },
      {
        id: "connuser", // Sets the stats for the user
        val: localStorage.getItem("connuser") || "",
      },
    ];

    log("Storage", persist.toString());

    // Clear everything
    localStorage.clear();

    // Add back any persistant items
    persist.forEach((item) => {
      if (item.val) {
        localStorage.setItem(item.id, item.val);
      }
    });
  },
};

const cleanString = (str: string) => {
  let result = str;

  // Check for leading quotes
  if (result.startsWith("'") || result.startsWith('"')) {
    result = result.substring(1);
  }
  // Check for ending quotes
  if (result.endsWith("'") || result.endsWith('"')) {
    result = result.substring(0, result.length - 1);
  }

  return decodeURIComponent(result);
};
