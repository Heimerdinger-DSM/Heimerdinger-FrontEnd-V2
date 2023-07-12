import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function ResultLivingPoint() {
  return (
    <Container>
      <Title>리빙 포인트</Title>
      <Wrapper>
        <Frame>
          <Text>친절</Text>
          <Percentagedkd></Percentagedkd>
        </Frame>
        <Frame>
          <Text>깔끔</Text>
          <Percentage></Percentage>
        </Frame>
        <Frame>
          <Text>최신</Text>
          <Percentage></Percentage>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 670px;
  height: 300px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Wrapper = styled.div`
  width: 500px;
`;

const Frame = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.strongGrayColor};
`;

const Percentage = styled.div`
  width: 400px;
  height: 20px;
  border-radius: 10px;
  background-color: ${theme.lightGrayColor};
`;

const Percentagedkd = styled.div`
  width: 400px;
  height: 20px;
  border-radius: 10px;
  background-color: ${theme.mainPurpleColor};
`;
