import React from "react";
import "./About.css";
// import backgroundvideo from "../assets/background.mp4"
const About = () => {
  return (

 <>
   {/* <video autoPlay loop muted playsInline className="bg-video">
          <source src={backgroundvideo} type="video/mp4" />
        </video> */}
    <div className="about-container" id="about">
      <div data-aos="fade-left" className="about-head">
        <h1 className="about">about...</h1>
        <p className="about-para">
          Hello! My name is Suhani Dhamania,{" "}
          <b style={{ color: "#e4d94e" }}>INTERN DEVELOPER</b> at Chatrapati
          Shivaji Subharti Hospital (EO OFFICE) Meerut. and I am passionate
          about building innovative and impactful solutions that live on the
          internet. My journey into MERN-stack development began in 2024 when I
          took my first steps toward creating engaging and functional websites.
        </p>
      </div>

      <div className="about-education">
        <div data-aos="fade-right" className="about-educ-head">
          <h5 className="date">2023-present</h5>
          <p className="about-para">
            I am currently pursuing my Bachelor of Computer Applications (BCA)
            from CCS University, Meerut (2023–Present). This program has helped
            me build a strong foundation in programming, data structures, and
            web technologies. I’ve also worked on several academic and personal
            projects to apply my skills practically.
          </p>
        </div>

        <div data-aos="fade-right" className="about-educ-head">
          <h5 className="date">2021-2023</h5>
          <p className="about-para">
            I completed my 11th and 12th from Shaifali Public School, Dadri, in
            the Science stream (2021–2023). During this time, I studied core
            subjects like Physics, Chemistry, and Mathematics. This phase helped
            me develop analytical thinking and problem-solving skills.
          </p>
        </div>

        <div data-aos="fade-right" className="about-educ-head">
          <h5 className="date">2019-2021</h5>
          <p className="about-para">
            I completed my 9th and 10th from Shaifali Public School, Dadri.
            These years laid the foundation of my academic journey and
            introduced me to structured learning. I developed interest in
            Mathematics and Computer Science during this phase.
          </p>
        </div>
      </div>
    </div>
   </>
  );
};

export default About;

