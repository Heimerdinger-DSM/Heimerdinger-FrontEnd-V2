import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Item() {
  return (
    <Container>
      <TitleBox>
        <Logo src="/imgs/login/logo.png" />
        <Login>로그인</Login>
      </TitleBox>

      <ItemBox>
        <InputBox>
          <Summary>아이디</Summary>
          <Input placeholder="아이디를 입력해주세요" />
        </InputBox>
        <InputBox>
          <Summary>비밀번호</Summary>
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputBox>
      </ItemBox>

      <Button>로그인</Button>
      <RouteBox>
        <Text>하이머딩거가 처음 이신가요?</Text>
        <Link href="/signup">
          <SignUp>회원가입</SignUp>
        </Link>
      </RouteBox>
    </Container>
  );
}
const Container = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
  z-index: 10;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 120px;
`;

const Login = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: ${theme.blackColor};
`;

const ItemBox = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Summary = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 280px;
  height: 44px;
  padding-left: 16px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  color: ${theme.blackColor};
  background-color: ${theme.whiteColor};
`;

const Button = styled.button`
  width: 280px;
  height: 44px;
  margin-top: 54px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const RouteBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
`;

const Text = styled.p`
  color: ${theme.blackColor};
`;

const SignUp = styled.p`
  text-decoration: underline;
  color: ${theme.mainNavyColor};
`;
