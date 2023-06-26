import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function LivingPoint() {
  const width = 0.75;
  const width2 = 0.25;
  return (
    <Container>
      <Title>리빙 포인트</Title>
      <PersentContainer>
        <ul>
          <li>
            <PersentBox width={width}>
              <h1>친절</h1>
              <div>
                <div></div>
              </div>
            </PersentBox>
          </li>
          <li>
            <PersentBox width={width2}>
              <h1>깔끔</h1>
              <div>
                <div></div>
              </div>
            </PersentBox>
          </li>
          <li>
            <PersentBox width={0}>
              <h1>최신</h1>
              <div>
                <div></div>
              </div>
            </PersentBox>
          </li>
        </ul>
      </PersentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 670px;
  height: 300px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const PersentContainer = styled.div`
  ul {
    list-style: none;
    li {
      margin-top: 40px;
    }
  }
`;
const PersentBox = styled.div<{ width: number }>`
  display: flex;
  gap: 30px;
  h1 {
    color: #000;
    font-size: 20.5px;
    font-weight: 800;
  }
  div {
    width: 350px;
    height: 20px;
    border-radius: 10px;
    background: #d9d9d9;
    div {
      width: calc(${(props) => props.width} * 350px);
      background-color: #7867bf;
    }
  }
`;
