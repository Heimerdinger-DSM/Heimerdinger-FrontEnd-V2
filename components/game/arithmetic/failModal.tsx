import { NextPage } from "next";
import GameModalTemplate from "./gameModalTemplate";
import { MouseEvent } from "react";

interface props {
  level: number;
}

/** 오답 */
const FailModel: NextPage<props> = ({ level }: props) => {
  const props = {
    title: `랜덤 사칙연산\n${level}단계 도전 실패 하셨습니다. 🥲`,
    firstButton: {
      text: "다음 단계로",
      action: (e: MouseEvent<HTMLButtonElement>) => {},
    },
    secondButton: {
      text: "그만하기",
      action: (e: MouseEvent<HTMLButtonElement>) => {},
    },
  };

  return (
    <>
      <GameModalTemplate {...props} />
    </>
  );
};

export default FailModel;
