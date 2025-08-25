import React from "react";
import "./Home.css";
import image from "../assets/Snapchat-439376570.jpg";
import resume from "../assets/resume (1).pdf";
import TypeWritter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div  className="hero-container" id="home">
      <div   className="hero-main" >
        <div data-aos="fade-right" className="hero-text">
          <p>Hello, I’m suhani Dhamania,</p>

          <h1 className="designation">
            {" "}
            <TypeWritter
              options={{
                strings: [
                  "Mern-stack Developer",
                  "Backend Developer💻",
                  "Frontend-Developer💻",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>

          <p
            className="location"
            
          >
            based in Noida.
          </p>
          <a target="_blank" href={resume}>
            <button className="resume-btn">Resume</button>
          </a>
        </div>

        <div className="hero-image">
          <div data-aos="fade-left" className="image-border">
            <img src={image} alt="Suhani Dhamania" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
