import { item } from "@/docs/facility/reviewDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function ResultList() {
  return (
    <Container>
      <ItemBox>
        <Item>
          <Inner>
            <ScoreBox>
              <StarBox>
                <Star src="/imgs/facility/star.png" />
                <Star src="/imgs/facility/star.png" />
                <Star src="/imgs/facility/star.png" />
                <Star src="/imgs/facility/star.png" />
                <Star src="/imgs/facility/noStar.png" />
              </StarBox>
              <Score>4</Score>
            </ScoreBox>

            <Content>
              이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
              사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에
              당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한
              사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라
              하실지 모르지만 사실입니다.영국에서 HGXWCH이라는 사람은 1930년에
              이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다.
              며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를
              받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을
              잊었습니다. 그는 곧 사직되었습니다. 나중에야 이 사실을 알고 7통의
              편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디
              대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는
              암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을
              것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를
              버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은
              사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요.
              7년의 행운을 빌면서...
            </Content>

            <UserBox>
              <ID>southwinboook</ID>
              <Line>I</Line>
              <Date>2023.06.14</Date>
            </UserBox>
          </Inner>
        </Item>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 60px 0;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${theme.lightGrayColor};
`;

const ItemBox = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* overflow-y: scroll; */
  & > div {
    &:first-child {
      margin-top: 660px;
    }
  }
`;

const Item = styled.div`
  position: absolute;
  top: 310px;
  width: 750px;
  padding: 24px 0;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Inner = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ScoreBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const StarBox = styled.div``;

const Star = styled.img`
  width: 18px;
`;

const Score = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Content = styled.p`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.blackColor};
`;

const UserBox = styled.div`
  margin-top: 20px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.thinGrayColor};
`;

const ID = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.nineGrayColor};
`;

const TextBox = styled.div`
  position: absolute;
  top: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 600;
  color: ${theme.blackColor};
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;
