import { memberItem } from "@/docs/member/meeberItemDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Team() {
  return (
    <Container>
      {memberItem.map((arr, i) => (
        <Profile key={i}>
          <Wrapper>
            <Image src={arr.img} />
            <ImageHover>
              <RouteBox>
                <Github src="/imgs/member/github.png" />
                <Route href={arr.github} target="_blank">
                  {arr.name}의<br />
                  깃허브 바로가기
                </Route>
              </RouteBox>
            </ImageHover>
          </Wrapper>
          <TextBox>
            <Name>{arr.name}</Name>
            <Develop>{arr.develop}</Develop>
            <Content>{arr.content}</Content>
          </TextBox>
        </Profile>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 40px 0 70px 0;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-column-gap: 125px;
  grid-row-gap: 50px;
`;

const Profile = styled.div`
  position: relative;
  width: 300px;
`;

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
`;

const ImageHover = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  background-color: ${theme.mainPurpleColor};
  &:hover {
    z-index: 6;
    opacity: 0.85;
    cursor: pointer;
  }
`;

const RouteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Github = styled.img`
  width: 46px;
  height: 47px;
  opacity: 1;
`;

const Route = styled.a`
  margin-left: 10px;
  opacity: 1;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.whiteColor};
`;

const Image = styled.img`
  z-index: 5;
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 125px;

  &:hover {
    z-index: -1;
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  width: 250px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Develop = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
`;

const Content = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
  white-space: pre-wrap;
`;
