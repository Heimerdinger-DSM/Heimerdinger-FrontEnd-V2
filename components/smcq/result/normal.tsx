import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Nomal() {
  return (
    <Container>
      <Wrapper>
        <ItemBox>
          <Link href="/smcq/main">
            <Back>{"<"} 처음으로</Back>
          </Link>
          <Logo src="/imgs/smcq/logo.png" />
        </ItemBox>

        <TitleBox>
          <Title>나의 치매 위험도는</Title>
          <Frame>
            <Strong>정상</Strong>
            <Title>입니다.</Title>
          </Frame>
        </TitleBox>

        <ContentBox>
          <Content>
            운동과 외부 사회 활동을 유지하시고
            <br />
            치매예방수칙 3.3.3을 잘 실천하셔서
            <br />
            치매를 예방하세요.
            <br />
            <br />
            좀 더 정확한 치매검진을 원하신다면
            <br />
            가까운 보건소나 치매지원센터를 <br />
            방문해주세요.
          </Content>
        </ContentBox>

        <ButtonBox>
          <Link href="/facility/main">
            <Button>
              우리 동네
              <br />
              치매 시설 찾기
            </Button>
          </Link>
          <Link href="/game/main">
            <Button>
              치매 예방
              <br />
              운동 하기
            </Button>
          </Link>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 480px;
  height: 540px;
  margin-top: 70px;
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ItemBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.thinGrayColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: ${theme.blackColor};
`;

const Back = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  color: ${theme.blackColor};
  cursor: pointer;
`;

const Logo = styled.img`
  width: 120px;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Title = styled.div``;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Strong = styled.div`
  color: ${theme.RedColor};
`;

const ContentBox = styled.div`
  width: 100%;
  height: 190px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: ${theme.blackColor};
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 144px;
  height: 70px;
  border: 1px solid ${theme.mainPurpleColor};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
  background-color: ${theme.whiteColor};
  transition: 0.4s;

  &:hover {
    color: ${theme.whiteColor};
    background-color: ${theme.mainPurpleColor};
    cursor: pointer;
  }
`;
