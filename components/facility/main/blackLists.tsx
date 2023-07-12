import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import Pagination from "./pagination";
import { item } from "@/docs/facility/blackListDocs";
import Link from "next/link";

export default function Lists() {
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offSet = (page - 1) * 10; //첫 게시물 위치
  const lastSet = item[item.length - 1];

  const updatePageValue = (newPageNum: number) => {
    setPage(newPageNum);
  };
  return (
    <Container id="list">
      <Link href="/facility/detail/1">
        <TitleBox>
          <Title>구분</Title>
          <Title>시설명</Title>
          <Title>전화번호</Title>
        </TitleBox>
        <ListCover>
          {item.slice(offSet, offSet + 10).map((arr, i) => (
            <ListBox key={i}>
              <TagBox>
                <Tag>{arr.tag}</Tag>
              </TagBox>
              <NameBox>
                <Name>{arr.name}</Name>
              </NameBox>
              <PhoneBox>
                <Phone>{arr.phone}</Phone>
              </PhoneBox>
            </ListBox>
          ))}
        </ListCover>
        <Pagination page={page} updatePageValue={updatePageValue} />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  background-color: ${theme.whiteColor};
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
  &:first-child {
    width: 200px;
    border-right: 1px solid ${theme.thinGrayColor};
  }
  &:nth-child(2) {
    width: 560px;
    border-right: 1px solid ${theme.thinGrayColor};
  }
  &:last-child {
    width: 240px;
  }
`;

const ListCover = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const ListBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  background-color: ${theme.whiteColor};
`;

const TagBox = styled.div`
  width: 200px;
  height: 100%;
  border-right: 1px solid ${theme.thinGrayColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tag = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const NameBox = styled.div`
  width: 560px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid ${theme.thinGrayColor};
`;

const Name = styled.p`
  width: 100%;
  padding-left: 26px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const PhoneBox = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Phone = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;
