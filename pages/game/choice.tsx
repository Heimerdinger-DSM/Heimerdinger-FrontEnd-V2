import { item } from "@/docs/main/programDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Choice() {
  return (
    <Container>
      <Wrapper>
        <ItemBox>
          {item.map((arr, i) => (
            <Link href={arr.url} key={i}>
              <Item>
                <ItemInner>
                  <Top>
                    <ItemTitle>{arr.title}</ItemTitle>
                    <Arrow src="/imgs/main/arrow.png" />
                  </Top>
                  <ItemContent>{arr.content}</ItemContent>
                </ItemInner>
              </Item>
            </Link>
          ))}
        </ItemBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  color: ${theme.blackColor};
`;

const Wrapper = styled.div`
  width: 1000px;
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: 0.4s;

  &:hover {
    transform: translateY(-30px);
    cursor: pointer;
  }
`;

const ItemInner = styled.div`
  width: 220px;
  height: 220px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Arrow = styled.img`
  width: 24px;
`;

const ItemContent = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
  white-space: pre-wrap;
`;
