import ContactBox from "@/components/communication/create/contactBox";
import TitleBox from "@/components/communication/create/titleBox";
import WriteBox from "@/components/communication/create/writeBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Create() {
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <ContactBox />
        <WriteBox />
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
