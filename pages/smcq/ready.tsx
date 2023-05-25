import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import ReadyItem from "@/components/smcq/readyItem";

export default function Ready() {
  return (
    <Container>
      <ReadyItem />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
  overflow-y: hidden;
`;
