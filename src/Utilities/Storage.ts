export const Storage = {
  get: (key: string) => {
    const store = localStorage.getItem(key);
    console.log({ store });
    const decoded = window.atob(store || "");
    console.log({ decoded });
    if (decoded) {
      const parsed = JSON.parse(JSON.parse(decoded)); // Double parsing this is a bad idea, but all I got for now
      return parsed;
    }

    return undefined;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, window.btoa(JSON.stringify(value)));
  },
};
