import { item } from "@/docs/facility/reviewDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useState, useCallback } from "react";

export default function List({
  setIsClick,
}: {
  setIsClick: (value: boolean) => void;
}) {
  const livingPointList: string[] = ["친절", "깔끔", "최신"];
  const [flag, setFlag] = useState<boolean[]>([false, false, false]);
  const [cartegory, setCartegory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isContent, setIsContent] = useState<boolean>(false);

  const livingPoint = livingPointList.map((list, i) => (
    <div
      key={i}
      onClick={(e) => {
        setFlag(flag.map((e, idx) => i === idx));
        setCartegory(list);
      }}
    >
      {flag[i] ? <PointerTag>{list}</PointerTag> : <Tag>{list}</Tag>}
    </div>
  ));
  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
      if (e.target.value.length < 1 || e.target.value.length > 255) {
        setIsContent(false);
      } else {
        setIsContent(true);
      }
    },
    []
  );
  const onClickBtn = () => {
    setIsClick(true);
  };

  return (
    <Container>
      <LivingBox>
        <hr />
        <h3>리빙포인트</h3>
        <TagContainer>{livingPoint}</TagContainer>
        <hr />
        <textarea
          placeholder="리뷰는 최대 255자까지 등록 가능합니다."
          value={content}
          onChange={(e) => {
            onChangeContent(e);
          }}
        ></textarea>
        <p>({content.length}/255)</p>
        <WritingBtn
          onClick={() => {
            onClickBtn;
          }}
        >
          등록
        </WritingBtn>
      </LivingBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 560px;
  margin: 60px 0;
  margin-top: 22px;
  border-radius: 12px;
  background-color: ${theme.whiteColor};
`;

const LivingBox = styled.div`
  width: 100%;
  height: 520px;
  hr {
    height: 1px;
    background-color: ${theme.thinGrayColor};
  }
  h3 {
    font-size: 16px;
    margin-top: 30px;
  }
  textarea {
    margin-top: 33px;
    resize: none;
    width: 100%;
    height: 280px;
    padding: 20px;
    border-radius: 4px;
    border: 1.4px solid #d4d4d4;
    font-size: 16px;
    ::placeholder {
      color: #999;
      font-size: 16px;
      font-family: Inter;
      font-weight: 500;
      margin-top: -22px;
    }
  }
  p {
    color: #999;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    margin-top: -50px;
    margin-left: 20px;
  }
`;
const Tag = styled.div`
  width: 66px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px 12px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #4e5059;
  cursor: pointer;
  :hover {
    background: #7867bf;
    color: #fff;
    transition: all 0.4s;
  }
`;
const PointerTag = styled(Tag)`
  background: #7867bf;
  color: #fff;
  border-radius: 12px 12px 4px 12px;
`;
const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 22px;
  margin-bottom: 40px;
`;
const WritingBtn = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 4px;
  background: #7867bf;
  margin-top: 61px;
  color: #fff;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
  cursor: pointer;
`;
