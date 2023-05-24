import { item } from "@/docs/main/heimerNewsDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function HeimerNews() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>하이머소식</Title>
          <Content>치매 관련 정보를 작성하고 공유할 수 있어요.</Content>
        </TextBox>
        <ItemBox>
          {item.map((arr, i) => (
            <Item key={i}>
              <Image src={arr.img} />
              <ItemTextBox>
                <ItemTitle>{arr.title}</ItemTitle>
                <ItemContent>{arr.content}</ItemContent>
              </ItemTextBox>
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
  background-color: ${theme.whiteColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.mainPurpleColor};
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 280px;
  height: 450px;
  border-radius: 20px;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: 0.4s;

  &:hover {
    transform: translateY(-30px);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const ItemTextBox = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  text-align: center;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.blackColor};
`;

const ItemContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  white-space: pre-wrap;
  color: ${theme.nineGrayColor};
`;
