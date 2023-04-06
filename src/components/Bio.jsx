import React from "react";
import "./Bio.stylesheet.scss";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPersonDigging,
  faUserGraduate,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
class Bio extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    const { location } = this.props;
    console.log(
      "🚀 ~ file: Bio.jsx ~ line 21 ~ Bio ~ render ~ location",
      location
    );

    return (
      <>
        <div className="links">
          {/* <Tilt className="bio Tilt" options={{ max: 70 }}> */}
          <Link to="/" className="bio Tilt">
            <div>
              <div className="myImg Tilt-inner"></div>
              <h4>Ronak Singh</h4>
              <small>Front-End | React js developer</small>
            </div>
          </Link>
          {/* </Tilt> */}

          <div
            className={
              this.state.toggle === true ? "toggle-routes routes" : "routes"
            }
          >
            <Tilt className="bio-in-routes Tilt" options={{ max: 70 }}>
              <div className="myImg Tilt-inner"></div>
              <h2>Ronak</h2>
              <small>
                React js developer
                <br />
                UI developer
                <br />
                front end developer
              </small>
            </Tilt>
            <ul className="nav" onClick={() => this.setState({ toggle: false })}>
              <Link to="/experience">
                <li
                  className={location.pathname.includes("experience") ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className="text">Experience</span>
                </li>
              </Link>
              <Link to="/skills">
                <li
                  className={location.pathname.includes("skills") ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faCode} />
                  <span className="text">Skills</span>
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className={
                    location.pathname.includes("projects") ? "active" : ""
                  }
                >
                  <FontAwesomeIcon icon={faPersonDigging} />
                  <span className="text">Projects</span>
                </li>
              </Link>
              <Link to="education">
                <li
                  className={
                    location.pathname.includes("education") ? "active" : ""
                  }
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                  <span className="text">Education</span>
                </li>
              </Link>
            </ul>
          </div>


          {/* toogle button for links */}
          <div
            className={this.state.toggle === true ? "burger toggle" : "burger"}
            onClick={() => this.setState({ toggle: !this.state.toggle })}
          >
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="links_for_mobile">
          <Link to="/" className="bio Tilt">
            <div className="myImg Tilt-inner"></div>
          </Link>
          <div className="drawerBtn">
                  
          </div>  
          <div className="otherPagesLinks">
            <ul className="nav" onClick={() => this.setState({ toggle: false })}>
              <Link to="/experience">
                <li
                  className={location.pathname.includes("experience") ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className="text">Experience</span>
                </li>
              </Link>
              <Link to="/skills">
                <li
                  className={location.pathname.includes("skills") ? "active" : ""}
                >
                  <FontAwesomeIcon icon={faCode} />
                  <span className="text">Skills</span>
                </li>
              </Link>
              <Link to="/projects">
                <li
                  className={
                    location.pathname.includes("projects") ? "active" : ""
                  }
                >
                  <FontAwesomeIcon icon={faPersonDigging} />
                  <span className="text">Projects</span>
                </li>
              </Link>
              <Link to="education">
                <li
                  className={
                    location.pathname.includes("education") ? "active" : ""
                  }
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                  <span className="text">Education</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Bio);
