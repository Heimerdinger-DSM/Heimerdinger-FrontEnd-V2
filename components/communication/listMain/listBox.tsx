import { listItem } from "@/docs/communication/listDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";
import { blackListItem } from "@/docs/communication/blackListDocs";

export default function ListBox() {
  const [starState, setStarState] = useState<boolean>(false);

  const onStarState = () => {
    setStarState((pre) => !pre);
    if (starState === true) {
    }
  };

  return (
    <Container>
      {blackListItem.map((arr, i) => (
        <Link href="/" key={i}>
          <Item>
            <Wrapper>
              <Tag>{arr.tag}</Tag>
              <Title>{arr.title}</Title>
              <UserBox>
                <Nickname>{arr.nickname}</Nickname>
                <Id>{arr.id}</Id>
              </UserBox>
              <Date>{arr.date}</Date>
              <Star
                src={`/imgs/communication/${starState ? "s" : "noS"}tar.png`}
                onClick={onStarState}
              />
            </Wrapper>
          </Item>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 900px;
  margin: 40px 0 100px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  width: 900px;
  height: 60px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.button`
  width: 10%;
  height: 28px;
  border: none;
  border-radius: 14px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const Title = styled.h1`
  width: 54%;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const UserBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
`;

const Nickname = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.mainPurpleColor};
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.mainPurpleColor};
`;

const Star = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
