import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <TextBox>
      <Title>하이머 소식</Title>
      <Content>치매 관련 정보를 나누고 소통해보세요.</Content>
    </TextBox>
  );
}

const TextBox = styled.div`
  width: 900px;
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
  font-size: 16px;
  font-weight: 400;
  color: ${theme.nineGrayColor};
`;
