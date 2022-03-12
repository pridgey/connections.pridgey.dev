export const Storage = {
  get: (key: string) => {
    const value = window.atob(localStorage.getItem(key) || "");
    console.log("Found value:", value);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, window.btoa(JSON.stringify(value)));
  },
};
