import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>주관적 기억감퇴 설문</Title>
          <Content>(SMCQ, Subjective Memory Complaints Questionnaire)</Content>
        </TextBox>
        <Image src="/imgs/smcq/chart.png" />
        <Button>시작하기</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 480px;
  height: 540px;
  margin-top: 70px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const Image = styled.img`
  width: 300px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
