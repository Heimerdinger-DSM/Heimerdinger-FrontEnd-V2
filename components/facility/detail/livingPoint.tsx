import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function LivingPoint() {
  return (
    <Container>
      <Title>리빙 포인트</Title>
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
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;
