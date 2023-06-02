import { LoginType } from "@/util/interface/login";
import { setToken } from "@/util/functions/token/tokenManager";
import { tokenType } from "@/util/interface/token";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const postLogin = async (loginData: LoginType) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/user/token`, loginData);
    const { access_token, refresh_token }: tokenType = data;

    setToken(access_token, refresh_token);
  } catch (error) {
    throw error;
  }
};
