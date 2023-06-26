import { atom } from "recoil";

export const yesValue = atom({
  key: "yesValue" + Date.now(),
  default: 0,
});
