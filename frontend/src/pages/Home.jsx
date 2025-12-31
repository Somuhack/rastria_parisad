import React from "react";

import Carosal from "../components/Carosal";
import AboutSection from "../components/About";
import Main from "../Layout/Main";
import StudentsSlider from "../components/Slider";
import Achievements from "../components/Achivments";
import Registretion from "../pages/students/Registretion"
import CertificateVerification from "./students/CertificateVerification";
import About from "./students/About/About";
import Recognition from "./Recongnition/Regongnition";
const Home = () => {
  return (
    <div>
      <Main>
        <Carosal />
        <AboutSection/>
        <StudentsSlider/>
        <Achievements/>
      
        <Registretion/>
    <CertificateVerification/>
    <About/>
    <Recognition/>

      </Main>
    </div>
  );
};
export default Home;
