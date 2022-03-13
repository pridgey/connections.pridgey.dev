export const Storage = {
  get: (key: string) => {
    const store = localStorage.getItem(key);
    console.log({ store });

    let clean = cleanString(store || "");
    console.log({ clean });

    const decoded = window.atob(clean || "");
    console.log({ decoded });

    const final = cleanString(decoded);
    console.log({ final });

    if (final) {
      const parsed = JSON.parse(final);
      console.log({ parsed });
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
};

const cleanString = (str: string) => {
  let result = str;
  console.log("Starts With:", result.startsWith('"'));
  // Check for leading quotes
  if (result.startsWith("'") || result.startsWith('"')) {
    result = result.substring(1);
  }
  // Check for ending quotes
  if (result.endsWith("'") || result.endsWith('"')) {
    result = result.substring(0, result.length - 1);
  }

  return decodeURI(result);
};
