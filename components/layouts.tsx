import Head from "next/head";
import { ReactNode } from "react";

export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>하이머딩거</title>
        <meta property="og:description" content="삐약삐약 최아린"></meta>
        <meta property="og:description" content="캔디리더 효정"></meta>
      </Head>
      <div>{children}</div>
    </>
  );
}
