import React from "react";
import { skills } from "../utils/Skills";
import "./Skills.css";

const Skills = () => {
  return ( 
    <div className="skills-container" id="skills">
      <div data-aos="fade-down-right" className="div">
        <h1>skills.</h1>
      <p className="skills-desc">
        These are the technologies and tools I have worked with while building my projects.
      </p>
      </div>
      <div data-aos="fade-down-left" className="skills-grid row">
        {skills.map((skill, index) => (
          <div  className="col-3 skill-card" key={index}>
            <div className="skill-box">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
