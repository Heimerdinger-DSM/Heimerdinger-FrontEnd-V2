import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Link href="/">
            <Logo src="/imgs/header/logo.png" />
          </Link>
          <TextBox>
            <Link href="/communication/main">
              <Text>하이머소식</Text>
            </Link>
            <Link href="/facility/main">
              <Text>치매시설정보</Text>
            </Link>
            <Link href="/smcq">
              <Text>치매자가진단</Text>
            </Link>
            <Link href="/">
              <Text>치매예방 프로그램</Text>
            </Link>
          </TextBox>
        </Frame>
        <Link href="/login">
          <Button>로그인</Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 140px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  & > a {
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${theme.blackColor};
  cursor: pointer;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
