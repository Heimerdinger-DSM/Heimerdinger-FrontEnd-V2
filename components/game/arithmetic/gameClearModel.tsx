import { NextPage } from "next";
import GameModalTemplate from "./gameModalTemplate";
import { MouseEvent } from "react";

const GameClearModel: NextPage = () => {
  const props = {
    title: "랜덤 사칙연산\n1단계 성공을 축하합니다! 🥳",
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

export default GameClearModel;
