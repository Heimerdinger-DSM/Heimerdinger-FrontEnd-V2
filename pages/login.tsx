import Background from "@/components/login/background";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Login() {
  return (
    <Container>
      <Background />
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
