import Footer from "@/components/common/footer";
import Team from "@/components/member/team";
import TitleBox from "@/components/member/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Member() {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleBox />
          <Team />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  height: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
