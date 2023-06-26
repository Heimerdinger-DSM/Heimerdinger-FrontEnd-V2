import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import ReviewList from "./list";
import WritingReview from "./writingReview";
import { useState, useCallback } from "react";
import axios from "axios";

export default function Review() {
  const [grade, setGrade] = useState<number>(0);
  const [isClick, setIsClick] = useState<boolean>(true);
  const [content, setContent] = useState<string>("");
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const onclickBtn = () => {
    setIsClick((prevState) => !prevState);
  };
  /*const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
      if (e.target.value.length < 1 || e.target.value.length > 255) {
        setIsContent(false);
      } else {
        setIsContent(true);
      }
    },
    []
  );*/
  const handleStarClick = (index: number): void => {
    let clickStates: boolean[] = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const StarDiv = () => {
    return (
      <div>
        {clicked.map((isFilled, index) => (
          <Star
            key={index}
            src={
              isFilled ? "/imgs/facility/Star.png" : "/imgs/facility/noStar.png"
            }
            onClick={() => {
              setGrade(index + 1);
              handleStarClick(index);
            }}
          />
        ))}
      </div>
    );
  };
  const send = () => {
    console.log(grade, content);
    axios({
      method: "POST",
      url: "BASE_URL",
      data: {
        grade: grade,
        content: content,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => {
      handleStarClick(-1);
      setGrade(0);
      setContent("");
    });
  };
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>리뷰</Title>
          <Content>별점을 선택해주세요.</Content>
        </TitleBox>
        <StarBox>{StarDiv()}</StarBox>
        {isClick ? (
          <>
            <InputBox>
              <Input
                //onChange={(e) => onChangeContent(e)}
                placeholder="시설에 대한 리뷰를 등록해보세요."
              />
              <Button
                onClick={() => {
                  onclickBtn();
                }}
              >
                등록
              </Button>
            </InputBox>
            <ReviewList />
          </>
        ) : (
          <WritingReview setIsClick={setIsClick} />
        )}
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
  cursor: pointer;
`;
