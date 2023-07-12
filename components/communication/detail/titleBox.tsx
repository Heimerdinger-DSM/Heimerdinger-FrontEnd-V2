import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <Wrapper>
        <Title>하이머딩거 프젝 화이팅입니다</Title>
        <Tag>중구</Tag>
      </Wrapper>

      <Frame>
        <LinkBox>
          <Link>
            <Key>카카오톡 오픈 채팅</Key>
            <Value>https://dsmhs.djsch.kr/main.do</Value>
          </Link>
          <Link>
            <Key>이메일</Key>
            <Value>hange253@gmail.com</Value>
          </Link>
        </LinkBox>

        <InfoBox>
          <Nickname>남승권</Nickname>
          <Id>southwinbook</Id>
          <Id>I</Id>
          <Date>2023.06.14</Date>
        </InfoBox>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.nineGrayColor};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Tag = styled.div`
  padding: 10px 26px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const Frame = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Link = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: flex-start;
`;

const Key = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
`;

const Value = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const InfoBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const Nickname = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
`;

const Id = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;
