import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { MouseEvent } from "react";

interface ActionButtonType {
  text: string;
  action: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface props {
  title: string;
  firstButton: ActionButtonType;
  secondButton: ActionButtonType;
}

const GameModalTemplate: NextPage<props> = ({
  title,
  firstButton,
  secondButton,
}: props) => {
  return (
    <GameClearModalContainer>
      <ModalBackground />
      <ModalWidget>
        <LogoWrap>
          <Logo src="/imgs/Logo.svg" />
        </LogoWrap>
        <MessageWrap>
          <MainText>{title}</MainText>
          <SubText>are you got it?</SubText>
        </MessageWrap>
        <BtnWrap>
          <Button onClick={firstButton.action}>{firstButton.text}</Button>
          <Button onClick={secondButton.action}>{secondButton.text}</Button>
        </BtnWrap>
      </ModalWidget>
    </GameClearModalContainer>
  );
};

const Button = styled.button`
  background-color: ${theme.whiteColor};
  border: 1px solid ${theme.mainPurpleColor};
  border-radius: 4px;

  width: 200px;
  height: 50px;

  font-weight: bold;
  font-size: 20px;
  color: ${theme.mainPurpleColor};
  cursor: pointer;

  &:first-of-type {
    color: ${theme.whiteColor};
    background-color: ${theme.mainPurpleColor};
  }
`;

const BtnWrap = styled.div`
  width: fit-content;

  display: flex;
  gap: 20px;

  margin-top: 75px;
  margin-bottom: 44px;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${theme.strongGrayColor};
`;

const MainText = styled.p`
  white-space: pre-wrap;
  font-size: 24px;
  font-weight: bold;

  display: flex;
  text-align: center;
  margin-top: 63px;
`;

const MessageWrap = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const Logo = styled.img`
  height: 23px;
`;

const LogoWrap = styled.div`
  width: 100%;
  padding: 14px 0;
  border-bottom: 1px solid ${theme.thinGrayColor};
  display: flex;
  justify-content: center;
`;

const ModalWidget = styled.div`
  width: 600px;
  background-color: ${theme.whiteColor};
  border-radius: 10px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.strongGrayColor};
  opacity: 0.2;
  position: absolute;
`;

const GameClearModalContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default GameModalTemplate;
