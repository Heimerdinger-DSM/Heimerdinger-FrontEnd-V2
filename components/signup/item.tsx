import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Item() {
  return (
    <Container>
      <TitleBox>
        <Logo src="/imgs/signup/logo.png" />
        <SignUp>회원가입</SignUp>
      </TitleBox>

      <ItemBox>
        <InputBox>
          <Summary>닉네임</Summary>
          <Input placeholder="닉네임을 입력해주세요" />
        </InputBox>
        <InputBox>
          <Summary>아이디</Summary>
          <Overlap>중복확인</Overlap>
          <Input placeholder="아이디를 입력해주세요" />
        </InputBox>
        <InputBox>
          <Summary>비밀번호</Summary>
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputBox>
        <InputBox>
          <Summary>비밀번호 확인</Summary>
          <Input placeholder="비밀번호를 다시 입력해주세요" />
        </InputBox>
      </ItemBox>

      <Button>회원가입</Button>
      <RouteBox>
        <Text>기존 회원이신가요?</Text>
        <Link href="/login">
          <Login>로그인</Login>
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
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 120px;
`;

const SignUp = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: ${theme.blackColor};
`;

const ItemBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  position: relative;
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

const Overlap = styled.p`
  position: absolute;
  top: 36px;
  right: 16px;
  font-size: 13px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
  cursor: pointer;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
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
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
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

const Login = styled.p`
  text-decoration: underline;
  color: ${theme.mainNavyColor};
`;
