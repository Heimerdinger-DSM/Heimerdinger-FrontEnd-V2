import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import TitleBox from "@/components/facility/main/titleBox";
import Search from "@/components/facility/main/search";
import Lists from "@/components/facility/main/lists";
import { useListsInput } from "@/hooks/useListsInput";


export default function Main() {
const {searched, getSearchData} = useListsInput();
  return (
    <Container>
      <Wrapper>
        <TitleBox />
        <Search {...{  getSearchData }} />
        <Lists {...{ searched }} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
