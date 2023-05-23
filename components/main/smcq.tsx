import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Talk from "./talk";

export default function SMCQ() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>
            SMCQ,
            <br />
            치매 자가진단 테스트
          </Title>
          <Content>
            SMCQ를 기반으로한 <br />
            치매 자가진단 테스트를 만나보세요.
          </Content>
          <Detail>자세히보기 {">"}</Detail>
        </TextBox>
        <Talk />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.backgroundColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.strongGrayColor};
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const Content = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
`;

const Detail = styled.p`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
