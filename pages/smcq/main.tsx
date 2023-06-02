import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Start from "@/components/smcq/start";

export default function Main() {
  return (
    <Container>
      <Start />
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
