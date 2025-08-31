import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="hero-navbar">
      <div className="head">
        <h3 data-aos="fade-down" className="hero-logo">
          Suhani Dhamania
        </h3>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>

      <div
        data-aos="fade-down"
        className={`hero-nav-links ${isOpen ? "active" : ""}`}
      >
        <Link onClick={closeMenu} className="route" to="/">Home</Link>
        <Link onClick={closeMenu} className="route" to="about">About</Link>
        <Link onClick={closeMenu} className="route" to="work">Work</Link>
        <Link onClick={closeMenu} className="route" to="skills">Skills</Link>
        <Link onClick={closeMenu} className="route" to="contact">Contact</Link>

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
    </div>
  );
};

export default Navbar;
