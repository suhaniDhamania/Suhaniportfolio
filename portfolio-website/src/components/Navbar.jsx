
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero-navbar">

      <div className="head">
        <h3 data-aos="fade-down" className="hero-logo">
          Suhani Dhamania
        </h3>
      </div>

    
      <div
        data-aos="fade-down"
        className={`hero-nav-links ${isOpen ? "active" : ""}`}
      >
        <Link onClick={() => setIsOpen(false)} className="route" to="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} className="route" to="about">
          About
        </Link>
        <Link onClick={() => setIsOpen(false)} className="route" to="work">
          Work
        </Link>
        <Link onClick={() => setIsOpen(false)} className="route" to="skills">
          Skills
        </Link>
        <Link onClick={() => setIsOpen(false)} className="route" to="contact">
          Contact
        </Link>

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

     
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <i className="fa-solid fa-times"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
