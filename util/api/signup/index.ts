import axios from "axios";
import { SignUpType } from "@/util/interface/signup";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const postSignUp = async (signData: SignUpType) => {
  try {
    await axios.post(`${BASE_URL}/user`, signData);
  } catch (error) {
    throw error;
  }
};
