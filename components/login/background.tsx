import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Item from "./item";

export default function Background() {
  return (
    <Container>
      <Wrapper>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <TextBox>
          <Title>HEIMERDINGER</Title>
          <Content>치매 정보 공유 웹 플랫폼</Content>
        </TextBox>
      </Wrapper>
      <Item />
    </Container>
  );
}

const Container = styled.div`
  width: 820px;
  height: 530px;
  margin-top: 70px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #7867bf 0%, #47467b 100%);
`;

const Circle = styled.div`
  position: absolute;
  width: 600px;
  border-radius: 50%;
  background-color: ${theme.whiteColor};
  opacity: 0.2;
`;

const Circle1 = styled(Circle)`
  height: 280px;
  transform: rotate(-11.85deg);
`;

const Circle2 = styled(Circle)`
  right: -70%;
  height: 600px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.whiteColor};
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
