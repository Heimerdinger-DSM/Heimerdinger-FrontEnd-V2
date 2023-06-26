import { item } from "@/docs/facility/listDocs";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

interface props {
  page: number;
  updatePageValue: (newPageNum: number) => void;
}

export default function Pagination({ page, updatePageValue }: props) {
  const numPages = Math.ceil(item.length / 10);

  const onMoveFront = () => {
    updatePageValue(page + 1);
  };

  const onMoveBack = () => {
    updatePageValue(page - 1);
  };
  return (
    <Container>
      <Link to="list" spy={true} smooth={true}>
        <Button onClick={onMoveBack} disabled={page === 1}>
          <LeftImage src="/imgs/facility/arrow.png" />
          이전
        </Button>
      </Link>
      <Link to="list" spy={true} smooth={true}>
        <NumberBox>
          {Array(numPages)
            .fill(0)
            .map((_, i) => (
              <NumberButton
                key={i + 1}
                onClick={() => updatePageValue(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
                saria-current={"page"}
              >
                {i + 1}
              </NumberButton>
            ))}
        </NumberBox>
      </Link>
      <Link to="list" spy={true} smooth={true}>
        <Button onClick={onMoveFront} disabled={page === numPages}>
          다음
          <RightImage src="/imgs/facility/arrow.png" />
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  gap: 12px;
  margin: 50px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 84px;
  height: 40px;
  gap: 8px;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.blackColor};
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const NumberBox = styled.div``;

const NumberButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 4px;
  border: solid 1px ${theme.thinGrayColor};
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  color: ${theme.blackColor};
  background-color: ${theme.whiteColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &[aria-current] {
    border: none;
    font-weight: bold;
    color: ${theme.whiteColor};
    background: ${theme.mainNavyColor};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    transform: revert;
  }
`;

const Image = styled.img`
  width: 12px;
`;

const LeftImage = styled(Image)``;

const RightImage = styled(Image)`
  transform: rotate(180deg);
`;
