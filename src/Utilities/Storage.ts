export const Storage = {
  debug: (key?: string) => {
    return Boolean(
      [key, "debug"].includes(localStorage.getItem("debug") || "")
    );
  },
  get: (key: string) => {
    // Check storage for debug key to show debug logs
    const debug = Boolean(
      ["debug", "storage"].includes(localStorage.getItem("debug") || "")
    );

    const store = localStorage.getItem(key);
    debug && console.log({ store });

    let clean = cleanString(store || "");
    debug && console.log({ clean });

    const decoded = window.atob(clean || "");
    debug && console.log({ decoded });

    const final = cleanString(decoded);
    debug && console.log({ final });

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
    localStorage.removeItem("conwg");
    localStorage.removeItem("conng");
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
