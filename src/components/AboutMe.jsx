import React from "react";
import "./AboutMe.css";
import github from "../assets/github.png";
import insta from "../assets/insta.png";
import medium from "../assets/medium.png";
import fb from "../assets/fb.png";
import heroimg from "../assets/hero.jpg";
import herovid from "../assets/herovid.mp4";

function AboutMe() {
  return (
    <>
      <section id="about" className="about">
        <div className="left">
          <h1>
            <span style={{ fontSize: 50, fontFamily: "Garamond, serif " }}>
              ☺
            </span>
            <br />
            Thank You.
            <br />
            For Visiting
          </h1>
          <h2>Made With ❤️ By Me</h2>
          <button className="resume">
            <a href="https://instagram.com/ajax.pvt" target="_blank">
              Contact
            </a>
          </button>
        </div>
        <div className="middle">
          <img className="img1" src={heroimg}></img>
          <img className="img2" src={heroimg}></img>
          <video playsInline autoPlay loop muted width="280" height="500">
            <source src={herovid} type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="contact">
        <ul>
          <li className="github">
            <a href="https://github.com/notajax24" target="_blank">
              <img src={github}></img>
            </a>
          </li>
          <li className="instagram">
            <a href="https://instagram.com/ajax.pvt/" target="_blank">
              <img src={insta}></img>
            </a>
          </li>
          <li className="facebook">
            <a href="https://www.facebook.com/Ajay.jachak24" target="_blank">
              <img src={fb}></img>
            </a>
          </li>
          <li className="medium">
            <a href="https://medium.com/@ajayjachak24">
              <img src={medium}></img>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
