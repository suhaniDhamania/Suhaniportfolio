import React from "react";
import { projects } from "../utils/Projectlist";
import "./Work.css";
// import backgroundvideo from "../assets/background.mp4"

const Work = () => {
  return (
  <>
   {/* <video autoPlay loop muted playsInline className="bg-video">
              <source src={backgroundvideo} type="video/mp4" />
            </video> */}
    <div className="work-container" id="work">
      <div data-aos="fade-right" className="work-header">
        <h1>work.</h1>
        <p className="project-des">
          Welcome to my project showcase! Here you'll find a collection of
          backend and full-stack web applications that I’ve built using modern
          technologies like MongoDB, Express.js, React.js, and Node.js. From
          travel itinerary platforms to food delivery systems and
          finance-inspired website clones.
        </p>
      </div>

      <div data-aos="zoom-in-left" className="project-cards">
        {projects.map((project) => (
          <div className="project-col" key={project._id}>
            <div className="card">
              <img
                src={project.image}
                alt={project.name}
                className="card-img"
              />
              <div className="card-body">
                <p className="card-title">{project.name}</p>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Work;
