import { gameDifficultyDoc } from "@/docs/gameDifficulty";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

interface props {
  path: "arithmetic" | "card";
}

const ChoiseGameStage: NextPage<props> = ({ path }: props) => {
  const gameInfo = gameDifficultyDoc[path];
  const router = useRouter();

  const goGamePage = (level: number) => {
    router.push(`/game/${path}/game?l=${level}`);
  };

  return (
    <ChoiseGameStagePage>
      <ChoiseGameStageWrap>
        <GameInfoWrap>
          <Title>{gameInfo.title}</Title>
          <Description>{gameInfo.description}</Description>
        </GameInfoWrap>
        <LevelBoxGrid>
          {gameInfo.levelDescription.map((description, i) => (
            <LevelBox key={i}>
              <LevelBoxItem>
                <div>
                  <Level>{i + 1}단계</Level>
                  <LevelDescription>{description}</LevelDescription>
                </div>
                <StartBtn onClick={() => goGamePage(i + 1)}>
                  시작하기&gt;
                </StartBtn>
              </LevelBoxItem>
            </LevelBox>
          ))}
        </LevelBoxGrid>
      </ChoiseGameStageWrap>
    </ChoiseGameStagePage>
  );
};

const StartBtn = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;

  font-weight: 700;
  font-size: 14px;
  color: ${theme.mainPurpleColor};

  cursor: pointer;
`;

const LevelDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;

const Level = styled.p`
  font-size: 20px;
  color: ${theme.blackColor};
  font-weight: 700;
`;

const LevelBoxItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const LevelBox = styled.div`
  width: 280px;
  height: 85px;
  background-color: ${theme.whiteColor};
  border-radius: 8px;
  border: 1px solid ${theme.lightGrayColor};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const LevelBoxGrid = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 40px 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${theme.nineGrayColor};
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const GameInfoWrap = styled.div`
  margin-top: 56px;
`;

const ChoiseGameStageWrap = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ChoiseGameStagePage = styled.main`
  width: 100%;
`;

export default ChoiseGameStage;
