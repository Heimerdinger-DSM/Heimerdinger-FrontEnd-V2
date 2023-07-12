import { RecoilState, atom } from "recoil";

interface createContactType {
  url: string;
  email: string;
}

export const createContact: RecoilState<createContactType> = atom({
  key: "createContact" + Date.now(),
  default: {
    url: "",
    email: "",
  },
});
