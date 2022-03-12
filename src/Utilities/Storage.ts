import atob from "atob";
import btoa from "btoa";

export const Storage = {
  get: (key: string) => {
    const value = atob(localStorage.getItem(key) || "");
    if (value) return JSON.parse(value);
    return undefined;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  },
};
