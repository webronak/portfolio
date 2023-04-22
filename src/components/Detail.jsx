import React from "react";
import "./Detail.styelsheet.scss";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import About from "./About";
import Experience from "./Experience";
import { Switch, Route } from "react-router-dom";

const Detail = () => {
  return (
    <div className="detail">
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/certifications" exact>
          <Education />
        </Route>
        <Route path="/experience" exact>
          <Experience />
        </Route>
      </Switch>

    </div>
  );
};

export default Detail;
