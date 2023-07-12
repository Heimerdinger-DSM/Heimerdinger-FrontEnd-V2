import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import List from "./list";
import Link from "next/link";
import CreateList from "./createList";
import { useState } from "react";

export default function CreateReview() {
  const [state, setState] = useState(false);

  const dkd = () => {
    setState(true);
  };

  const onClickTag = () => (
    <div>
      {state === true ? (
        <StarBox>
          <Star src="/imgs/facility/star.png" />
          <Star src="/imgs/facility/star.png" />
          <Star src="/imgs/facility/star.png" />
          <Star src="/imgs/facility/star.png" />
          <Star src="/imgs/facility/noStar.png" />
        </StarBox>
      ) : (
        <StarBox>
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
        </StarBox>
      )}
    </div>
  );

  return (
    <Container>
      <Wrapper onClick={dkd}>
        <TitleBox>
          <Title>리뷰</Title>
          <Content>별점을 선택해주세요.</Content>
        </TitleBox>
        <StarBox>{onClickTag()}</StarBox>
        <Line></Line>
        <CreateList />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 30px 0 60px 0;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 780px;
  padding: 50px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Content = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.nineGrayColor};
`;

const StarBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const Star = styled.img`
  width: 40px;
`;

const Line = styled.div`
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid ${theme.thinGrayColor};
`;
