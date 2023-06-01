import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function ReadyItem() {
  return (
    <Container>
      <Wrapper>
        <Title>
          다음 문항들을 읽으면서
          <br />
          자신의 행동이나 생각 또는
          <br />
          느낌과 일치하는 것에 체크해 주십시오.
        </Title>
        <Image src="/imgs/smcq/smaile.png" />
        <Link href="/smcq/test">
          <Button>다음으로</Button>
        </Link>
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
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Image = styled.img`
  width: 160px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
