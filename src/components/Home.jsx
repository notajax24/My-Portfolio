import React from "react";
import "./Home.css";
import mypic from "../assets/mypic.png";
import icon1 from "../assets/icon1.gif";
import icon2 from "../assets/icon2.gif";
import icon3 from "../assets/icon3.gif";
import icon4 from "../assets/icon4.gif";
import resume from "../assets/resume.pdf";
import bgvideo from "../assets/bgvideo.mp4";

export const Data = [
  {
    title: "Graphics Design",
    logo: icon1,
  },
  {
    title: "UI/UX Design",
    logo: icon2,
  },
  {
    title: "Web Development",
    logo: icon3,
  },
  {
    title: "React Js",
    logo: icon4,
  },
];

function Box({ title, logo }) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <img src={logo} alt="logo"></img>
    </div>
  );
}

function home() {
  return (
    <>
      <section id="home" className="hero">
        <video src={bgvideo} type="video/mp4" autoPlay muted loop>
          Your browser does not supports video tag.
        </video>
        <div className="left">
          <h1>
            <span style={{ fontSize: 50, fontFamily: "Garamond, serif " }}>
              I'm
            </span>
            <br />
            Ajay
            <br />
            Jachak
          </h1>
          <h2>Designer , Developer </h2>
          <button className="resume">
            <a href={resume} download="Resume">
              Resume
            </a>
          </button>
        </div>
        <div className="middle">
          <img src={mypic}></img>
        </div>
        <div className="right">
          <h1>
            Front-end <span style={{ color: "#FF9900" }}>Developer</span>,
            <br />
            Bug <span style={{ color: "#FF9900" }}>Bounty</span> Hunter,
            <br />
            UI/UX <span style={{ color: "#FF9900" }}>Designer</span>
          </h1>
          <p>
            Welcome to my portfolio, I am a front end developer
            <br />
            and UI/UX designer based in pune , Maharashtra
            <br /> I Have 2+ years of experience in web development <br />
            Along with it I am a cyber security researcher <br /> and Bug Bounty
            Hunter.
          </p>
        </div>
      </section>
      <section id="services" className="page2">
        <h1>What Am I Providing</h1>
        <p>
          As a dedicated
          <span style={{ color: "#FF9900" }}> Front-end developer,</span> I
          offer a range of services to
          <br />
          bring your digital vision to life.
          <span style={{ color: "#FF9900" }}> Specializing in:</span>
        </p>
        <div className="cards">
          <Box {...Data[0]} />
          <Box {...Data[1]} />
          <Box {...Data[2]} />
          <Box {...Data[3]} />
        </div>
      </section>
    </>
  );
}

export default home;
