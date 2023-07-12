import { RecoilState, atom } from "recoil";

interface createStateType {
  url: string;
  email: string;
  title: string;
  content: string;
}

export const createState: RecoilState<createStateType> = atom({
  key: "createState" + Date.now(),
  default: {
    url: "",
    email: "",
    title: "",
    content: "",
  },
});
