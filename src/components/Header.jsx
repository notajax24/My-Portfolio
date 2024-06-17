import React from "react";
import "./Header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className="menu">
          <a onClick={() => scrollToSection("home")} href="#home">
            Home
          </a>
          <a onClick={() => scrollToSection("services")} href="#services">
            Skills
          </a>
          <a onClick={() => scrollToSection("projects")} href="#projects">
            Projects
          </a>
          <a onClick={() => scrollToSection("about")} href="#about">
            About Me
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
