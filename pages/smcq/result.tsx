import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Nomal from "@/components/smcq/result/normal";
import Disorder from "@/components/smcq/result/disorder";
import { useRecoilValue } from "recoil";
import { yesValue } from "@/util/store/yesValue";

export default function Result() {
  const result = useRecoilValue(yesValue);
  console.log(result);
  return <Container>{result <= 7 ? <Nomal /> : <Disorder />}</Container>;
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
