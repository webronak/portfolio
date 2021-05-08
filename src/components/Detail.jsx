import React from 'react';
import './Detail.styelsheet.scss';
import Skills from './Skills';
import Projects from './Projects';
import Education from "./Education";
import About from './About';
import {
    Switch,
    Route
  } from "react-router-dom";

const Detail = () => {
    return(
        <div className="detail">
            
            <Switch>
                <Route path="/my-portfolio/" exact>
                    <About/>
                </Route>
                <Route path="/skills" exact>
                    <Skills/>
                </Route>
                <Route path="/projects" exact>
                    <Projects/>
                </Route>
                <Route path="/education" exact>
                    <Education/>
                </Route>
            </Switch>
        </div>
    );
}

export default Detail;
