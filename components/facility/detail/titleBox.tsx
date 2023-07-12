import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function TitleBox() {
  return (
    <Container>
      <Title>대전광역시 유성구 치매안심센터</Title>
      <Category>치매센터 {">"} 치매안심센터</Category>
      <InfoBox>
        <Wrapper>
          <CenterTag>치매센터</CenterTag>
          <AreaTag>유성구</AreaTag>
          <Phone>전화번호 I 042-611-5018</Phone>
        </Wrapper>
        <Address>대전 유성구 박산로 177 (구암동) 유성구보건소 2층</Address>
      </InfoBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.nineGrayColor};
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Category = styled.div`
  margin-top: 26px;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;

const InfoBox = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

const CenterTag = styled.div`
  padding: 10px 26px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainNavyColor};
`;

const AreaTag = styled.div`
  padding: 10px 26px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const Phone = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const Address = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;
