import React from 'react';
import jsImg from './images/js.png';
import cssImg from './images/css.png';
import htmlImg from './images/html5.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bootstrapImg from './images/bootstrap.png';
import {
  faGit
} from "@fortawesome/free-brands-svg-icons";
import {
  faBinoculars
} from "@fortawesome/free-solid-svg-icons";

const gteTechImg = {
  'javascript': jsImg,
  'css': cssImg,
  'html': htmlImg,
  'bootstrap': bootstrapImg,
}

const Project = ({ techList = [], projectImg, projectLink }) => {
  return (
    <div className='project' >
      <div className="project_img" style={{ backgroundImage: `url(${projectImg})` }}>
      </div>
      <div className='project_techstack_list'>
        <div className='project_techstack_head'>Used Tech Stack</div>
        <div className='project_techstack_list_container'>
          {
            techList.map((str) => (
              <div className='project_techstack_img' style={{ backgroundImage: `url(${gteTechImg[str]})` }}></div>
            ))
          }
        </div>
      </div>
      <div className='action_btns'>
        <button>
          <FontAwesomeIcon icon={faGit} />
        </button>
        <a href={projectLink} target="_blank" rel="noreferrer">
          <button>
            <FontAwesomeIcon icon={faBinoculars} />
          </button>
        </a>
      </div>
    </div>
  );
}
export default Project;