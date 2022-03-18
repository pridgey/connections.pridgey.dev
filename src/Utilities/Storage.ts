export const Storage = {
  debug: (key?: string) => {
    // Determines if we have a storage item telling us to log stuff
    return Boolean([key, "all"].includes(localStorage.getItem("debug") || ""));
  },
  get: (key: string) => {
    // Check storage for debug key to show debug logs
    const debug = Boolean(
      ["all", "storage"].includes(localStorage.getItem("debug") || "")
    );

    // Get the item from storage
    const store = localStorage.getItem(key);
    debug && console.log({ store });

    // Clean that string (basically just checks for common errors)
    let clean = cleanString(store || "");
    debug && console.log({ clean });

    // Decode the string to its actual value
    const decoded = window.atob(clean || "");
    debug && console.log({ decoded });

    // Clean it one more time, juuuuust in case
    const final = cleanString(decoded);
    debug && console.log({ final });

    // If we have a value at this point, parse it
    if (final) {
      const parsed = JSON.parse(final);
      debug && console.log({ parsed });
      return parsed;
    }

    return undefined;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(
      key,
      window.btoa(encodeURIComponent(JSON.stringify(value)))
    );
  },
  clear: () => {
    // Grab the things that should p ersist day to day
    let persist = [
      {
        id: "conrr",
        val: localStorage.getItem("conrr") || "",
      },
      {
        id: "consta",
        val: localStorage.getItem("consta") || "",
      },
    ];
    // Clear everything
    localStorage.clear();
    // If something is there, add it back
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
