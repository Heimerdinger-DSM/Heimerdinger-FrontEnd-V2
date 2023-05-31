import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function ContactBox() {
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
          <Input placeholder="연락할 수 있는 SNS 링크를 입력해주세요." />
        </InputBox>
        <InputBox>
          <Text>이메일</Text>
          <Input placeholder="이메일 주소를 입력해주세요." />
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
  margin-top: 32px;
  display: flex;
  align-items: center;
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
