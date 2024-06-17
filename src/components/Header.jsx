import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
        </div>
      </div>
    </>
  );
}

export default Header;
