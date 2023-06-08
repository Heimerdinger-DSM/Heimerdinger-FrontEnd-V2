import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <Title>Team.파꽃</Title>
      <Content>하이머딩거를 개발한 Team.파꽃의 맴버를 소개합니다!</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
`;

const Content = styled.p`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.nineGrayColor};
`;
