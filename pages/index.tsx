import Footer from "@/components/common/footer";
import Banenr from "@/components/main/banner";
import FacilitySearch from "@/components/main/facilitySearch";
import HeimerNews from "@/components/main/heimerNews";
import Program from "@/components/main/program";
import SMCQ from "@/components/main/smcq";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Main() {
  return (
    <Container>
      <Banenr />
      <HeimerNews />
      <FacilitySearch />
      <Program />
      <SMCQ />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: ${theme.whiteColor};
`;
