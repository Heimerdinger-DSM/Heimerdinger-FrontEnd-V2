import { item } from "@/docs/main/programDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Program() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>치매 예방 프로그램</Title>
          <Content>
            치매 예방에 도움이 되는 다양한 프로그램을 하이머딩거에서 만나보세요.
          </Content>
        </TextBox>
        <ItemBox>
          {item.map((arr, i) => (
            <Item key={i}>
              <ItemInner>
                <Top>
                  <ItemTitle>{arr.title}</ItemTitle>
                  <Arrow src="/imgs/main/arrow.png" />
                </Top>
                <ItemContent>{arr.content}</ItemContent>
              </ItemInner>
            </Item>
          ))}
        </ItemBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#8e80cb, #7867bf);
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 70px 0 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  color: ${theme.whiteColor};
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
`;

const ItemInner = styled.div`
  width: 220px;
  height: 220px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Arrow = styled.img`
  width: 24px;
`;

const ItemContent = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  white-space: pre-wrap;
`;
