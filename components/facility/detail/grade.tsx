import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { item } from "@/docs/facility/reviewDocs";

export default function Grade() {
  return (
    <Container>
      <Title>사용자 평점</Title>
      <Number>5.0</Number>
      <StarBox>
        <Star src="/imgs/facility/star.png" />
        <Star src="/imgs/facility/star.png" />
        <Star src="/imgs/facility/star.png" />
        <Star src="/imgs/facility/star.png" />
        <Star src="/imgs/facility/star.png" />
      </StarBox>
      <People>{item.length}명 참여</People>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Number = styled.h1`
  margin-top: 40px;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const StarBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const Star = styled.img`
  width: 32px;
`;

const People = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.nineGrayColor};
`;
