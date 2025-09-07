
import React from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";
import "./LandingPage.css";
import backgroundvideo from "../assets/background.mp4"
const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      {/* Content Sections */}
      <div className="content">
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;

