import React from "react";

import Carosal from "../components/Carosal";
import AboutSection from "../components/About";
import Main from "../Layout/Main";
import StudentsSlider from "../components/Slider";
import Achievements from "../components/Achivments";

const MyHome = () => {
  return (
    <div>
      <Main>
        <Carosal />
        <AboutSection />
        <StudentsSlider />
        <Achievements />

        {/* <Registretion />
        <CertificateVerification />
        <About />
        <Recognition /> */}
      </Main>
    </div>
  );
};
export default MyHome;
