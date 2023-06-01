import ItemBox from "@/components/communication/listMain/ItemBox";
import ListBox from "@/components/communication/listMain/listBox";
import TitleBox from "@/components/communication/listMain/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function ListMain() {
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <ItemBox />
        <ListBox />
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
