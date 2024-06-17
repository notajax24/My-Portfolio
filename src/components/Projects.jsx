import React from "react";
import "./Projects.css";
import img1 from "../assets/banking-app.jpg";
import img2 from "../assets/ajaxsser.jpg";
import img3 from "../assets/img1.jpg";
import img4 from "../assets/img1.jpg";

function Projects() {
  const Data = [
    {
      title: "React Banking App",
      image: img1,
      link,
    },
    {
      title: "Python Tool for XSS",
      image: img2,
    },
    {
      title: "Project 3",
      image: img3,
    },
    {
      title: "Project 4",
      image: img4,
    },
  ];

  function Box({ title, image }) {
    return (
      <div className="card">
        <a href={link} target="_blank">
          <img className="p-image" src={image} alt={title}></img>
        </a>
        <label>{title}</label>
      </div>
    );
  }
  return (
    <>
      <section id="projects" className="projects">
        <h1>My Projects Collection</h1>
        <p>
          Explore my projects to see how I{" "}
          <span style={{ color: "#FF9900" }}>combine creativity </span> and
          <br />
          <span style={{ color: "#FF9900" }}>technical skills </span>
          to deliver exceptional digital solutions,
          <br />
          If you like them then please{" "}
          <span style={{ color: "#FF9900" }}>let me know</span>
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

export default Projects;
