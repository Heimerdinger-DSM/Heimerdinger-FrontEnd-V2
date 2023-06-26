import { item } from "@/docs/facility/reviewDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function List() {
  return (
    <Container>
      <ItemBox>
        {item.map((arr, i) => (
          <Item key={i}>
            <Inner>
              <ScoreBox>
                <StarBox>
                  <Star src="/imgs/facility/star.png" />
                  <Star src="/imgs/facility/star.png" />
                  <Star src="/imgs/facility/star.png" />
                  <Star src="/imgs/facility/star.png" />
                  <Star src="/imgs/facility/noStar.png" />
                </StarBox>
                <Score>4</Score>
              </ScoreBox>

              <Content>{arr.content}</Content>

              <UserBox>
                <ID>{arr.id} </ID>
                <Line>I</Line>
                <Date>{arr.date}</Date>
              </UserBox>
            </Inner>
          </Item>
        ))}
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 60px 0;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${theme.lightGrayColor};
`;

const ItemBox = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  & > div {
    &:first-child {
      margin-top: 660px;
    }
  }
`;

const Item = styled.div`
  width: 90%;
  padding: 24px 0;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Inner = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ScoreBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const StarBox = styled.div``;

const Star = styled.img`
  width: 18px;
`;

const Score = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.blackColor};
`;

const UserBox = styled.div`
  margin-top: 20px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.thinGrayColor};
`;

const ID = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;
