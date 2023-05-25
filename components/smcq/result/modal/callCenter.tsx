import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export interface props {
  view: boolean;
  call: () => void;
}

export default function CallCenter({ view, call }: props) {
  return (
    view && (
      <Container>
        <Wrapper>
          <TopBox>
            <Logo src="/imgs/smcq/logo.png" />
          </TopBox>
          <TextBox>
            <Title>치매 상담 서비스</Title>
            <Content>
              치매관련 기관에 다년간 근무한 치매 전담 상담사들이 <br />
              일정기간 치매전문 교육․훈련을 받고, 표준화된 상담교재 및 <br />
              자료 활용으로 365일 치매전문 상담서비스를 하고 있습니다.
            </Content>
          </TextBox>
          <ButtonBox>
            <a href="https://www.nid.or.kr/support/callcenter_intro.aspx">
              <Button>바로 가기</Button>
            </a>
            <Button className="next" onClick={call}>
              다음에 하기
            </Button>
          </ButtonBox>
        </Wrapper>
      </Container>
    )
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #20202060;
`;

const Wrapper = styled.div`
  position: relative;
  width: 600px;
  height: 380px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
`;

const TopBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${theme.thinGrayColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 120px;
`;

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.strongGrayColor};
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 50px;
  width: 440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    width: 210px;
    height: 50px;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Button = styled.button`
  width: 210px;
  height: 50px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${theme.mainPurpleColor};
  color: ${theme.mainPurpleColor};
  background-color: ${theme.whiteColor};

  &:first-child {
    border: 1px solid ${theme.mainPurpleColor};
    color: ${theme.whiteColor};
    background-color: ${theme.mainPurpleColor};
  }
`;
