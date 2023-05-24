import { gameDifficultyDoc, gameLevelDescription } from "@/docs/gameDifficulty";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Game() {
  const router = useRouter();
  const [gameInfo, setGameInfo] = useState<{
    level: number;
    description: string;
  }>({
    level: 1,
    description: "",
  });

  useEffect(() => {
    if (!router.isReady) return;
    const { l } = router.query;

    if (typeof l !== "string") {
      router.push("/game/arithmetic/main");
    } else {
      const level = +l;
      setGameInfo({
        level: level,
        description: gameLevelDescription[level - 1],
      });
    }
  }, [router.isReady]);

  return (
    <GamePage>
      <div>
        <Title>랜덤 사칙연산 {gameInfo.level}단계</Title>
        <Description>{gameInfo.description} 문제가 나옵니다.</Description>
      </div>
      <ActionBtnWrap>
        <ActionBtn>
          <Icon src="/imgs/game/skipIcon.svg" />
          <BtnText>건너뛰기</BtnText>
        </ActionBtn>
        <ActionBtn>
          <Icon src="/imgs/game/endIcon.svg" />
          <BtnText>그만두기</BtnText>
        </ActionBtn>
      </ActionBtnWrap>
    </GamePage>
  );
}

const BtnText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.blackColor};
`;

const Icon = styled.img`
  width: 45px;
  height: 35px;
  object-position: center;
  object-fit: contain;
`;

const ActionBtn = styled.button`
  padding: 0 15px;

  width: 210px;
  height: 54px;

  background-color: ${theme.whiteColor};

  border: 1px solid ${theme.lightGrayColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  display: flex;
  align-items: center;

  gap: 8px;
`;

const ActionBtnWrap = styled.div`
  width: fit-content;
  display: flex;
  gap: 14px;
  margin-top: 26px;
`;

const GamePage = styled.main`
  width: 1000px;
  margin: 54px auto 0 auto;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${theme.nineGrayColor};
  margin-top: 12px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.strongGrayColor};
`;
