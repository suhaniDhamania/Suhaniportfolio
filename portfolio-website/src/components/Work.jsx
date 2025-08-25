
import React from "react";
import { projects } from "../utils/Projectlist";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="work-container" id="work">
        <div  data-aos="fade-right"  className="div">
          <h1>work.</h1>
        <p className="project-des" >
          Welcome to my project showcase! Here you'll find a collection of
          backend and full-stack web applications that I’ve built using modern
          technologies like MongoDB, Express.js, React.js, and Node.js. From
          travel itinerary platforms to food delivery systems and
          finance-inspired website clones.
        </p>
        </div>

        <div data-aos="zoom-in-left" className="project-cards row">
          {projects.map((project) => (
            <div className="col-4" key={project._id}>
              <div className="card mb-4" style={{ width: "90%",backgroundColor:"transparent",border:"none" }}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text">
                  <p  className="card-title">{project.name}</p>
                  <p  className="card-text">{project.description}</p>
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
