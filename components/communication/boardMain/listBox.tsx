import { listItem } from "@/docs/communication/listDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Link from "next/link";
import instance from "@/util/axios";
import Result from "@/pages/smcq/result";

export default function ListBox() {
  const [starState, setStarState] = useState<boolean>(false);
  const [feedList, setfeedList] = useState<any[]>([]);

  const onStarState = () => {
    setStarState((pre) => !pre);
    if (starState === true) {
    }
  };

  // const PostList = async () => {
  //   try {
  //     const res = await instance.get("/feeds/list");
  //     console.log("call");
  //     console.log(res.data);
  //     setfeedList(res.data.feed_response_list);
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   PostList();
  // }, []);

  return (
    <Container>
      {listItem.map((arr, i) => (
        <Cover key={i}>
          <StarBox>
            <Star
              src={`/imgs/communication/${starState ? "s" : "noS"}tar.png`}
              onClick={onStarState}
            />
            <StarNumber>{arr.starNumber}</StarNumber>
          </StarBox>
          <Link href="/communication/detail/1">
            <Item>
              <Wrapper>
                <TopBox>
                  <Title>{arr.title}</Title>
                </TopBox>

                <UserBox>
                  <Nickname>{arr.nickname}</Nickname>
                  <Id>{arr.id}</Id>
                </UserBox>

                <Content>{arr.content}</Content>

                <BottomBox>
                  <Date>{arr.date}</Date>
                  <Tag>{arr.tag}</Tag>
                </BottomBox>
              </Wrapper>
            </Item>
          </Link>
        </Cover>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 900px;
  margin: 40px 0 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const Cover = styled.div`
  position: relative;
  width: 280px;
  height: 330px;
`;

const Item = styled.div`
  width: 280px;
  height: 330px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  position: relative;
  width: 220px;
  height: 270px;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  width: 170px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const StarBox = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

const Star = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const StarNumber = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const UserBox = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
`;

const Nickname = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Id = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.mainPurpleColor};
`;

const Content = styled.p`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const BottomBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.mainPurpleColor};
`;

const Tag = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  border-radius: 14px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;
