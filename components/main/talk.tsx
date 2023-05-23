import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Talk() {
  return (
    <Container>
      <RightBox>
        <QBox>Q</QBox>
        <TalkBox>
          가게에서 2~3가지 물건을 사려할 때,
          <br />
          물건 이름을 기억하기 어렵습니까?
        </TalkBox>
      </RightBox>

      <LeftBox>
        <TalkBox>
          가스 불이나 전기 불을 끄는 것을
          <br />
          기억하기 어렵습니까?
        </TalkBox>
        <QBox>Q</QBox>
      </LeftBox>

      <RightBox>
        <QBox>Q</QBox>
        <TalkBox>
          며칠 전에 잡은 약속을 다시 기억하기
          <br />
          어렵습니까?
        </TalkBox>
      </RightBox>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
`;

const RightBox = styled(Box)`
  transform: translateX(-200px);
`;

const LeftBox = styled(Box)`
  & > div {
    &:first-child {
      border: 1px solid ${theme.lightGrayColor};
      color: ${theme.strongGrayColor};
      background-color: ${theme.whiteColor};
    }
  }
`;

const QBox = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.mainNavyColor};
  background-color: ${theme.lightPurpleColor};
`;

const TalkBox = styled.div`
  width: 306px;
  height: 86px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;
