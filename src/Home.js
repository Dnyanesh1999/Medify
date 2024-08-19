import React from "react";
import { Box } from "@mui/material";

import HeroSection from "./HeroSection";
import SearchContainer from "./SearchContainer";
import Slider from "./Slider";
import SpecialisationGrid from "./Specialisation";
import DoctorsSlider from "./DoctorsSlider";
import PatientCaringSection from "./Caring";
import LatestNewsSection from "./News";
import OurFamiliesSection from "./OurFamily";
import FAQSection from "./FAQ";
import DownloadAppSection from "./DownloadSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <HeroSection />
      <SearchContainer />
      <Box sx={{ marginTop: "40px", padding: "0 20px" }}>
        <Slider />
      </Box>
      <SpecialisationGrid />
      <DoctorsSlider />
      <PatientCaringSection />
      <LatestNewsSection />
      <OurFamiliesSection />
      <FAQSection />
      <DownloadAppSection />
      <Footer />
    </Box>
  );
};

export default Home;
