import React from "react";
import "./Projects.stylesheet.scss";
import Project from "./Project";
import urbImg from "./images/project-1.jpg";
import kccImg from "./images/project-2.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">My projects</h1>

      <div className="set">
        <Project
          projectImg={urbImg}
          projectDesc="I built this webpage for a doctor, SEO-friendly webpage with beautiful UI. Moreover, fluent in getting user queries and direct them on Gmail."
          projectLink="https://myurb.in/"
        />
        <Project
          projectImg={kccImg}
          projectDesc="a fully responsive web portel for a coaching institute, containing saveral pages and easy navigation. built using bootstap and PHP."
          projectLink="https://www.khalsacoachingcentre.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
