import React from "react";
import { Hero } from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { Sectiontwo } from "./section-two/Section-two";
import { Sectionone } from "./section-one/Section-One";
import { SectionThree } from "./section-three/SectionThree";
import { SectionFour } from "./Section four/SectionFour";
import { Footer } from "./Footer/Footer";
// // import Values from "./section-values/values";
import Points from "./section-points/points";
import Qualities from "./Qualities/Qualities";
import Team from "./section-team/Team";

export const Index = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      {/* <div>
        <Values />
      </div> */}
      <div>
        <Sectionone />
      </div>
      <div>
        <Sectiontwo />
      </div>
      <div style={{ marginTop: "4em" }}>
        <Points />
      </div>
      <div>
        <SectionFour />
      </div>

      <div>
        <SectionThree />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Qualities />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
