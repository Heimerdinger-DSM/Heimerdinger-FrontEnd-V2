import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { link } from "fs";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactBox() {
  const [contactState, setContactState] = useState({
    link: "",
    email: "",
  });

  const { link, email } = contactState;

  const isEmailFormat = (emailText: string) => {
    const snsLinkRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return snsLinkRegex.test(emailText);
  };

  const ContactInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === "email" && isEmailFormat(value)) {
      toast.success("올바른 입력입니다.");
    }

    setContactState((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <Container>
      <TitleBox>
        <Number>1</Number>
        <Title>연락처를 작성해주세요.</Title>
        <Content>(필수 입력 X)</Content>
      </TitleBox>

      <ItemBox>
        <InputBox>
          <Text>SNS 링크</Text>
          <Input
            name="link"
            value={link}
            onChange={ContactInputChange}
            minLength={2}
            maxLength={50}
            placeholder="연락할 수 있는 SNS 링크를 입력해주세요."
          />
        </InputBox>
        <InputBox>
          <Text>이메일</Text>
          <Input
            name="email"
            value={email}
            onChange={ContactInputChange}
            minLength={5}
            maxLength={30}
            placeholder="이메일 주소를 입력해주세요."
          />

          <Message>
            {isEmailFormat(email) || "이메일을 형식에 맞게 작성해주세요."}
          </Message>
        </InputBox>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const TitleBox = styled.div`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.thinGrayColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Number = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
  background-color: ${theme.thinGrayColor};
`;

const Title = styled.h1`
  margin-left: 12px;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  margin-left: 6px;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;

const ItemBox = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const InputBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Input = styled.input`
  width: 460px;
  height: 60px;
  padding-left: 22px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.blackColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
`;

const Message = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.RedColor};
`;
