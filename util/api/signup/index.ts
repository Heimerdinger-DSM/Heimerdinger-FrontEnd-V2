import axios from "axios";
import { SignUpType } from "@/util/interface/signup";
import instance from "@/util/axios";

export const postSignUp = async (signData: SignUpType) => {
  try {
    await instance.post(`/auth/signup`, signData);
  } catch (error) {
    throw error;
  }
};
