import { theme } from "@/styles/theme";
import { postLogin } from "@/util/api/login";
import { formatInput } from "@/util/functions/formatInput";
import { LoginType } from "@/util/interface/login";
import { areYouLogin } from "@/util/store/areYouLogin";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

export default function Item() {
  const [loginState, setLoginState] = useState<LoginType>({
    account_id: "",
    password: "",
  });
  const toastId = useRef<any>(null);
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [loginHeaderState, setLoginHeaderState] = useRecoilState(areYouLogin);

  const { account_id, password } = loginState;

  const SignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (
      name === "account_id" &&
      /[^a-zA-Z0-9]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error(
        "아이디는 영문, 숫자 형식으로 구성되어야 합니다."
      );
    }
    if (
      name === "password" &&
      /[^a-zA-Z0-9\d@$!%*#?&]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error(
        "비밀번호는 영문, 숫자, 특수문자 형식으로 구성되어야 합니다."
      );
    }

    const formmatedVlaue = formatInput(value, name);

    setLoginState({
      ...loginState,
      [name]: formmatedVlaue,
    });
  };

  const submitLogin = async () => {
    if (account_id === "" || password === "") {
      toast.error("채워지지 않은 입력칸이 있습니다.");
    } else {
      try {
        await postLogin({
          account_id,
          password,
        });
        toast.success("로그인에 성공했습니다!");
        setLoginHeaderState(true);
        router.push("/");
      } catch (error) {
        toast.error("id, password가 일치하지 않습니다.");
        setLoginState({
          account_id,
          password: "",
        });
        ref.current?.focus();
      }
    }
  };
  return (
    <Container>
      <TitleBox>
        <Logo src="/imgs/login/logo.png" />
        <Login>로그인</Login>
      </TitleBox>

      <ItemBox>
        <InputBox>
          <Summary>아이디</Summary>
          <Input
            name="account_id"
            value={account_id}
            onChange={SignUpInputChange}
            minLength={8}
            maxLength={20}
            placeholder="아이디를 입력해주세요"
            autoComplete="off"
          />
        </InputBox>
        <InputBox>
          <Summary>비밀번호</Summary>
          <Input
            ref={ref}
            name="password"
            value={password}
            onChange={SignUpInputChange}
            minLength={8}
            maxLength={20}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            type="password"
          />
        </InputBox>
      </ItemBox>

      <Button onClick={submitLogin}>로그인</Button>
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

const SignUp = styled.p`
  text-decoration: underline;
  color: ${theme.mainNavyColor};
`;
