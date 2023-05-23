import Footer from "@/components/common/footer";
import Banenr from "@/components/main/banner";
import FacilitySearch from "@/components/main/facilitySearch";
import HeimerNews from "@/components/main/heimerNews";
import Program from "@/components/main/program";
import SMCQ from "@/components/main/smcq";

export default function Main() {
  return (
    <>
      <Banenr />
      <HeimerNews />
      <FacilitySearch />
      <Program />
      <SMCQ />
      <Footer />
    </>
  );
}
