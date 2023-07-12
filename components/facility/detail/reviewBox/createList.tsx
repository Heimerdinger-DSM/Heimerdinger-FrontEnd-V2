import { item } from "@/docs/facility/reviewDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

export default function CreateList() {
  const tagItem = ["친절", "깔끔", "최신"];
  const [tag, setTag] = useState<number>(-1);
  const onClickTag = tagItem.map((list, i) => (
    <div
      key={i}
      onClick={() => {
        setTag(i);
      }}
    >
      {i === tag ? <ClickTag>{list}</ClickTag> : <Tag>{list}</Tag>}
    </div>
  ));
  return (
    <Container>
      <Living>
        <Title>리빙포인트</Title>
        <TagBox>{onClickTag}</TagBox>
      </Living>

      <TextArea placeholder="리뷰는 최대 255자까지 등록 가능합니다." />

      <Link href="/facility/resultDetail/1">
        <Button>등록</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Living = styled.div`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid ${theme.thinGrayColor};
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const TagBox = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
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

const TextArea = styled.textarea`
  width: 100%;
  height: 350px;
  margin-top: 40px;
  padding: 14px 0 0 14px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 6px;
  resize: none;
  outline: none;
`;

const Button = styled.button`
  width: 780px;
  height: 50px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;
