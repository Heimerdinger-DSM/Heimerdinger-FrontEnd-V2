import ItemBox from "@/components/communication/boardMain/ItemBox";
import BlackListBox from "@/components/communication/boardMain/blackListBox";
import ListBox from "@/components/communication/boardMain/listBox";
import TitleBox from "@/components/communication/boardMain/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <ItemBox />
        <BlackListBox />
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
  width: 1000px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
