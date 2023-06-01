import Header from "@/components/common/header";
import Layouts from "@/components/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Layouts>
          <Header />
          <Component {...pageProps} />
          <ToastContainer />
        </Layouts>
      </RecoilRoot>
    </>
  );
}
