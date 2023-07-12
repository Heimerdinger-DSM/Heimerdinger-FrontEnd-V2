import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Footer() {
  const item = [
    {
      img: "/imgs/main/footer/people.png",
      link: "/member",
    },
    {
      img: "/imgs/main/footer/notion.png",
      link: "",
    },
    {
      img: "/imgs/main/footer/github.png",
      link: "",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Logo src="/imgs/main/footer/whiteLogo.png" />
          <Team>@2023 Team.파꽃</Team>
          <Explanation>
            개인 정보 처리 방침 | 이용약관
            <br />
            (34111) 대전광역시 유성구 가정북로 76(장동 23-9) <br />
            이메일: heimerdinger@gmail.com
          </Explanation>
          <Developer>Developer</Developer>
        </TextBox>
        <RouteBox>
          {item.map((arr, i) => (
            <Route key={i}>
              <Link href="/member">
                <Image src={arr.img} />
              </Link>
            </Route>
          ))}
        </RouteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.strongGrayColor};
`;

const Wrapper = styled.div`
  width: 1000px;
  padding-bottom: 20px;
  display: flex;
  border-bottom: 1px solid ${theme.whiteColor};
  align-items: flex-end;
  justify-content: space-between;
`;

const TextBox = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.whiteColor};
`;

const Logo = styled.img`
  width: 140px;
`;

const Team = styled.div`
  margin-top: 14px;
`;

const Explanation = styled.div`
  margin-top: 16px;
`;

const Developer = styled.div`
  margin-top: 30px;
`;

const RouteBox = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

const Route = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
`;

const Image = styled.img`
  width: 32px;
`;
