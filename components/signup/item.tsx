import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { formatInput } from "@/util/functions/formatInput";
import { SignUpType } from "@/util/interface/signup";
import { postSignUp } from "@/util/api/signup";

export default function Item() {
  const [signupState, setSignupState] = useState<SignUpType>({
    nickname: "",
    account_id: "",
    password: "",
    passwordCheck: "",
  });
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const toastId = useRef<any>(null);

  const { nickname, account_id, password, passwordCheck } = signupState;

  const SignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (
      name === "nickname" &&
      /[^a-zA-Z0-9ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(value) &&
      !toast.isActive(toastId.current)
    ) {
      toastId.current = toast.error("특수문자는 입력할 수 없습니다.");
    }
    if (
      name === "id" &&
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

    setSignupState({
      ...signupState,
      [name]: formmatedVlaue,
    });
  };

  const submitSignup = async () => {
    if (nickname === "" || account_id === "" || password === "") {
      toast.error("채워지지 않은 입력칸이 있습니다.");
    } else if (password !== passwordCheck) {
      toast.error("password가 일치 하지 않습니다!");
      setSignupState((pre) => ({ ...pre, passwordCheck: "" }));
      ref.current?.focus();
    } else {
      try {
        await postSignUp({
          nickname: nickname,
          account_id: account_id,
          password: password,
          passwordCheck: passwordCheck,
        });

        toast.success("회원가입에 성공했습니다!");
        router.push("/login");
      } catch (error) {
        toast.error("회원가입에 실패했습니다!");
        setSignupState({
          nickname: "",
          account_id: "",
          password: "",
          passwordCheck: "",
        });
      }
    }
  };

  return (
    <Container>
      <TitleBox>
        <Logo src="/imgs/signup/logo.png" />
        <SignUp>회원가입</SignUp>
      </TitleBox>

      <ItemBox>
        <InputBox>
          <Summary>닉네임</Summary>
          <Input
            name="nickname"
            value={nickname}
            onChange={SignUpInputChange}
            minLength={2}
            maxLength={8}
            placeholder="닉네임을 입력해주세요"
            autoComplete="off"
          />
        </InputBox>
        <InputBox>
          <Summary>아이디</Summary>
          <Overlap>중복확인</Overlap>
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
            name="password"
            value={password}
            onChange={SignUpInputChange}
            minLength={10}
            maxLength={20}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            type="password"
          />
        </InputBox>
        <InputBox>
          <Summary>비밀번호 확인</Summary>
          <Input
            ref={ref}
            name="passwordCheck"
            value={passwordCheck}
            onChange={SignUpInputChange}
            minLength={10}
            maxLength={20}
            placeholder="비밀번호를 다시 입력해주세요"
            autoComplete="off"
            type="password"
          />
        </InputBox>
      </ItemBox>

      <Button onClick={submitSignup}>회원가입</Button>
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
