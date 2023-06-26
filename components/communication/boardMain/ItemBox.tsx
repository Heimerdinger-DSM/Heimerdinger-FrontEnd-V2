import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

export default function ItemBox() {
  const [areaOption, setAreaOption] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<boolean>(false);

  const onAreaOption = () => {
    setAreaOption((pre) => !pre);
  };

  const onSortOption = () => {
    setSortOption((pre) => !pre);
  };

  return (
    <Container>
      <Link href="/communication/create">
        <Button>+ 글 작성하기</Button>
      </Link>

      <InfoBox>
        <AreaSelect>
          <Selected onClick={onAreaOption}>
            <Title>전체</Title>
            <Arrow src="/imgs/communication/arrow.svg" />
          </Selected>

          <OptionBox option={areaOption}>
            <Option>전체</Option>
            <Option>중구</Option>
            <Option>동구</Option>
            <Option>서구</Option>
            <Option>유성구</Option>
            <Option>대덕구</Option>
          </OptionBox>
        </AreaSelect>

        <SortSelect>
          <Selected onClick={onSortOption}>
            <Title>최신순</Title>
            <Arrow src="/imgs/communication/arrow.svg" />
          </Selected>

          <OptionBox option={sortOption}>
            <Option>최신순</Option>
            <Option>인기순</Option>
          </OptionBox>
        </SortSelect>

        <ImageBox>
          <BoardIcon src="/imgs/communication/board/boardIcon.png" />
          <Link href="/communication/listmain">
            <ListIcon src="/imgs/communication/board/listIcon.png" />
          </Link>
        </ImageBox>
      </InfoBox>
    </Container>
  );
}

const Container = styled.div`
  width: 900px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 180px;
  height: 44px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const AreaSelect = styled.div`
  width: 100px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const SortSelect = styled.div`
  cursor: pointer;
`;

const Selected = styled.div`
  position: relative;
  width: 100px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.whiteColor};
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Arrow = styled.img`
  width: 14px;
`;

const OptionBox = styled.ul`
  position: absolute;
  top: 290px;
  width: 100px;
  padding-left: 0px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 6px;
  display: ${({ option }: { option: boolean }) => (option ? "block" : "none")};
  appearance: none;
  list-style-type: none;
  background-color: ${theme.whiteColor};
  z-index: 10;
`;

const Option = styled.li`
  width: 100px;
  height: 32px;
  padding-left: 10px;
  border-bottom: 1px solid ${theme.lightGrayColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.blackColor};
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${theme.lightPurpleColor};
  }
`;

const ImageBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  & > a {
    height: 28px;
  }
`;

const BoardIcon = styled.img`
  height: 28px;
  cursor: pointer;
`;

const ListIcon = styled.img`
  height: 28px;
  cursor: pointer;
`;
