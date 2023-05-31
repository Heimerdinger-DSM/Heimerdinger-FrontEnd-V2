import Content from "@/components/communication/detail/content";
import TitleBox from "@/components/communication/detail/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Index() {
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <Content />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
`;

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
