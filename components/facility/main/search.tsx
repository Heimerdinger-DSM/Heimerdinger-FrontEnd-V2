import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface ISearchProps {
  getSearchData: (e: ChangeEvent<HTMLInputElement>)=>void;
}
export default function Search({getSearchData}:ISearchProps) {

  return (
    <Container>
      <InputBox>
        <Image src="/imgs/facility/search.png" alt="search 이미지입니다."/>
        <Input
          onChange={getSearchData}
          placeholder="시설명을 입력해보세요."
        />
      </InputBox>
      <Button
        onClick={() => {

        }}
      >
        검색
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputBox = styled.div`
  width: 790px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  top: 16px;
  left: 14px;
  width: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 56px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  background-color: ${theme.whiteColor};
`;

const Button = styled.button`
  width: 180px;
  height: 56px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
