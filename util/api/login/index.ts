import { LoginType } from "@/util/interface/login";
import { setToken } from "@/util/functions/token/tokenManager";
import { tokenType } from "@/util/interface/token";
import instance from "@/util/axios";

export const postLogin = async (loginData: LoginType) => {
  try {
    console.log(loginData);
    const { data } = await instance.post(`/auth/signin`, loginData);
    const { access_token, refresh_token }: tokenType = data;

    console.log(data);

    setToken(access_token, refresh_token);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
