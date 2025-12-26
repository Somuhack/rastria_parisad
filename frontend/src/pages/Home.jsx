import React from "react";

import Carosal from "../components/Carosal";
import AboutSection from "../components/About";
import Main from "../Layout/Main";
import StudentsSlider from "../components/Slider";
import Achievements from "../components/Achivments";

const Home = () => {
  return (
    <div>
      <Main>
        <Carosal />
        <AboutSection/>
        <StudentsSlider/>
        <Achievements/>
      </Main>
    </div>
  );
};
export default Home;
