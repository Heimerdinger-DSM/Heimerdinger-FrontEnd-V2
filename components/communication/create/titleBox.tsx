import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <TextBox>
      <Title>글 작성하기</Title>
      <Content>하이머소식에 등록할 글을 작성할 수 있어요.</Content>
    </TextBox>
  );
}

const TextBox = styled.div`
  width: 100%;
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
