import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutSec from "../../components/Sections/AboutSec";
import DetailsSec from "../../components/Sections/DetailsSec";
import Features from "../../components/Sections/Features";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-14 bg-gray-50">
        <Features />
      </div>
      <AboutSec />
      <DetailsSec />
      <Footer />
    </>
  );
};

export default About;
