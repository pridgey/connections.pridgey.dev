import atob from "atob";
import btoa from "btoa";

export const Storage = {
  get: (key: string) => {
    return JSON.parse(atob(localStorage.getItem(key) || ""));
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  },
};
