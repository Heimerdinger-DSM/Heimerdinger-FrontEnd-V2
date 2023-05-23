import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Banenr() {
  return (
    <Contaienr>
      <Wrapper>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <TextBox>
          <Title>
            치매 관련 정보를
            <br />
            하이머딩거에서
            <br />한 눈에 모아보세요!
          </Title>
          <Content>
            치매 관련 정보 공유, 시설 검색, 리뷰작성, 프로그램 등을 <br />
            하이머딩거에서 한번에 만나보세요.
          </Content>
        </TextBox>
      </Wrapper>
    </Contaienr>
  );
}

const Contaienr = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainPurpleColor};
`;

const Circle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1000px;
`;

const Circle1 = styled(Circle)`
  top: -100px;
  left: -100px;
  background: linear-gradient(
    135deg,
    ${theme.mainNavyColor},
    ${theme.mainPurpleColor}
  );
`;

const Circle2 = styled(Circle)`
  bottom: -100px;
  right: -100px;
  background: linear-gradient(-135deg, #e0def2, #7c6bc2);
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 26px;
  color: ${theme.whiteColor};
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  z-index: 10;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
