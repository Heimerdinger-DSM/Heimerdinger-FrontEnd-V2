import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

export default function WriteBox() {
  const tagItem = ["중구", "동구", "서구", "유성구", "대덕구"];
  const [link, setLink] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeState(event.target.value);
  };

  const changeState = (newText: string) => {
    setLink(newText);
  };

  //지역 태그 선택--------------------------//
  const [tag, setTag] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickTag = tagItem.map((list, i) => (
    <div
      key={i}
      onClick={() => {
        setTag(tag.map((arr, index) => i === index));
      }}
    >
      {tag[i] ? <ClickTag>{list}</ClickTag> : <Tag>{list}</Tag>}
    </div>
  ));
  //-------------------------------------//

  return (
    <Container>
      <TitleBox>
        <Number>2</Number>
        <Title>게시글을 작성해주세요.</Title>
      </TitleBox>

      <Frame>
        <TextBox>
          <Text>지역</Text>
          <Strong>*</Strong>
        </TextBox>
        <TagBox>{onClickTag}</TagBox>
      </Frame>

      <ItemBox>
        <InputBox>
          <TextBox>
            <Text>제목</Text>
            <Strong>*</Strong>
          </TextBox>
          <Input
            name="link"
            value={link}
            onChange={onChange}
            placeholder="글 제목을 입력해주세요."
            maxLength={50}
          />
        </InputBox>
        <InputBox>
          <TextBox>
            <Text>내용</Text>
            <Strong>*</Strong>
          </TextBox>
          <Textarea placeholder="글 내용을 입력해주세요."></Textarea>
        </InputBox>
      </ItemBox>

      <Button>글 등록하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 70px 0 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Frame = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const TagBox = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

const Tag = styled.p`
  width: fit-content;
  padding: 10px 24px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 12px 12px 4px 12px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
  background-color: ${theme.whiteColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &:hover {
    border: 1px solid ${theme.mainPurpleColor};
    color: ${theme.whiteColor};
    background-color: ${theme.mainPurpleColor};
    cursor: pointer;
  }
`;

const ClickTag = styled.p`
  width: fit-content;
  padding: 10px 24px;
  border: 1px solid ${theme.mainPurpleColor};
  border-radius: 12px 12px 4px 12px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const ItemBox = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Strong = styled.strong`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.RedColor};
`;

const Input = styled.input`
  width: 100%;
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

const Textarea = styled.textarea`
  width: 100%;
  height: 330px;
  padding: 22px 0 0 22px;
  resize: none;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.blackColor};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  width: 400px;
  height: 56px;
  margin-top: 50px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
