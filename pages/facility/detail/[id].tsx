import Grade from "@/components/facility/detail/grade";
import LivingPoint from "@/components/facility/detail/livingPoint";
import Review from "@/components/facility/detail/reviewBox/review";
import TitleBox from "@/components/facility/detail/titleBox";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Index() {
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <Frame>
          <Grade />
          <LivingPoint />
        </Frame>
        <Review />
      </Wrapper>
    </Container>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Frame = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
