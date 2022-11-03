import React from "react";
import "./Main.stylesheet.scss";
import reactImg from "./images/react.png";
import reduxImg from "./images/redux.png";
import sassImg from "./images/sass.png";
import jsImg from "./images/js.png";
import Bio from './Bio';
import Detail from './Detail';


const Main = () => {
  return (
    <div className="main">
      <div className="glass">
        <Bio/>
        <Detail/>       
      </div>
      <img src={reactImg} alt="react" id="reactImg1" />
      <img src={reactImg} alt="react" id="reactImg2" />
      <img src={reactImg} alt="react" id="reactImg3" />
      {/* <img src={sassImg} alt="react" id="sassImg" /> */}
      {/* <img src={reduxImg} alt="react" id="reduxImg" /> */}
      {/* <img src={jsI?mg} alt="react" id="jsImg" /> */}
    </div>
  );
};
export default Main;
