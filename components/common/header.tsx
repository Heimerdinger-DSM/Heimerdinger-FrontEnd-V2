export default function Header() {
  return (
    <>
      <h1>header</h1>
    </>
  );
}
<<<<<<< Updated upstream
=======

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 140px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  & > a {
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${theme.blackColor};
  cursor: pointer;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
>>>>>>> Stashed changes
