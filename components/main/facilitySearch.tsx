import { tags } from "@/docs/main/facilitySearchDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function FacilitySearch() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Title>
            내 주변 시설 정보를
            <br />
            찾아볼 수 있습니다.
          </Title>
          <Content>
            치매 시설을 검색하고,
            <br />
            리뷰와 별점 기능을 통해 정보를 확인할 수 있어요.
          </Content>
          <Detail>자세히보기 {">"}</Detail>
        </TextBox>
        <SearchBox>
          <Input placeholder="시설명을 검색해보세요!" />
          <TagBox>
            {tags.map((arr, i) => (
              <Tag key={i}>{arr}</Tag>
            ))}
          </TagBox>
        </SearchBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.lightPurpleColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: ${theme.strongGrayColor};
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const Content = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
`;

const Detail = styled.p`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
  cursor: pointer;
`;

const SearchBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 70px;
  padding-left: 36px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 10px 10px 10px 30px;
  outline: none;
  font-size: 16px;
  background-color: ${theme.whiteColor};
`;

const TagBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.p`
  width: fit-content;
  margin: 0;
  padding: 10px 26px;
  border-radius: 16px 4px 16px 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;
