import axios, { AxiosError } from "axios";
import { getToken } from "../functions/token/tokenManager";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config: any) {
    const accessToken: string = await getToken().accessToken;

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      console.log("토큰 두배로 먹어~");
      return Promise.reject(error);
    }
  }
);

export default instance;
