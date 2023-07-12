import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import List from "./list";
import Link from "next/link";
import ResultList from "./resultList";

export default function ResultReview() {
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>리뷰</Title>
          <Content>별점을 선택해주세요.</Content>
        </TitleBox>
        <StarBox>
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
          <Star src="/imgs/facility/noStar.png" />
        </StarBox>
        <InputBox>
          <Input placeholder="시설에 대한 리뷰를 등록해보세요." />
          <Link href="/facility/blackDetail/1">
            <Button>등록</Button>
          </Link>
        </InputBox>
        <ResultList />
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

const InputBox = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 620px;
  height: 50px;
  padding-left: 20px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  background-color: ${theme.whiteColor};
`;

const Button = styled.button`
  width: 140px;
  height: 50px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;
