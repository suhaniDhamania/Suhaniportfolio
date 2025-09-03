import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [Isopen,setIsopen]=useState(true);

  

  return (
    <div className="hero-navbar">
      <div className="head">
        <h3 data-aos="fade-down" className="hero-logo">
          Suhani Dhamania
        </h3>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-toggle">
         <i  onClick={()=>setIsopen(!Isopen)} className={Isopen ? "fa-solid fa-bars" : "fa-solid fa-times"}></i>
        
      </div>

     {
      !Isopen &&(
         <div
        data-aos="fade-down"
        className="hero-nav-links" 
      >
        <Link  onClick={()=>setIsopen(!Isopen)} className="route" to="/">Home</Link>
        <Link onClick={()=>setIsopen(!Isopen)} className="route" to="about">About</Link>
        <Link onClick={()=>setIsopen(!Isopen)} className="route" to="work">Work</Link>
        <Link onClick={()=>setIsopen(!Isopen)} className="route" to="skills">Skills</Link>
        <Link onClick={()=>setIsopen(!Isopen)} className="route" to="contact">Contact</Link>

        <div className="hero-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/suhanidhamania"
          >
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/suhaniDhamania"
          >
            <i className="fa-brands fa-github icon"></i>
          </a>
        </div>
      </div>
      )
     }
    </div>
  );
};

export default Navbar;
