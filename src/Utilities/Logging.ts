import { v4 } from "uuid";
import { Storage } from "./../Utilities";

export const Logging = () => {
  // Get user string
  const user = Storage.get("connuser");

  if (!user) {
    const id = v4();
  }
};
