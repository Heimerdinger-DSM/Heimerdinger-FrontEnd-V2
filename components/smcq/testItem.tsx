import { item } from "@/docs/smcq/testDocs";
import { theme } from "@/styles/theme";
import { yesValue } from "@/util/store/yesValue";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function TestItem() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [result, setResult] = useRecoilState(yesValue);
  const router = useRouter();
  let percentage = pageIndex * 7;

  const onYesValue = () => {
    setResult((pre) => pre + 1);
    console.log(result);
  };

  const onNextPage = () => {
    if (pageIndex <= 12) {
      setPageIndex((pre) => pre + 1);
    } else {
      router.push("/smcq/result");
    }
  };

  const onBackPage = () => {
    if (pageIndex >= 1) {
      setPageIndex((pre) => pre - 1);
      setResult((pre) => pre - 1);
    } else {
      router.push("/smcq/main");
    }
  };

  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <ItemBox>
            <Back onClick={onBackPage}>{"<"} 뒤로</Back>
            <Logo src="/imgs/smcq/logo.png" />
            <Page>{item[pageIndex].page}/14</Page>
          </ItemBox>
          <StepBar value={percentage} max="100"></StepBar>
        </TitleBox>

        <Question>{item[pageIndex].question}</Question>

        <ButtonBox>
          <Button onClick={onNextPage} onMouseDown={onYesValue}>
            예
          </Button>
          <Button onClick={onNextPage}>아니오</Button>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 480px;
  height: 540px;
  margin-top: 70px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 800;
  color: ${theme.blackColor};
`;

const Back = styled.div`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 120px;
`;

const Page = styled.div`
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StepBar = styled.progress`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 10px;
  margin-top: 20px;

  &::-webkit-progress-bar {
    background: ${theme.lightPurpleColor};
  }
  &::-webkit-progress-value {
    background: ${theme.mainPurpleColor};
    transition: 0.4s;
  }
`;

const Question = styled.div`
  line-height: 26px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  white-space: pre-wrap;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid ${theme.mainPurpleColor};
  border-radius: 6px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
  background-color: ${theme.whiteColor};
  transition: 0.4s;
  &:hover {
    color: ${theme.whiteColor};
    background-color: ${theme.mainPurpleColor};
    cursor: pointer;
  }
`;
