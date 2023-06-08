import { RecoilState, atom } from "recoil";

export const areYouLogin: RecoilState<boolean> = atom({
  key: "areYouLogin" + Date.now(),
  default: false,
});
