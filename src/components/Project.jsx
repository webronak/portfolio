import React from 'react';

const Project = (props) =>{
    return(
        <div className="project" style={{backgroundImage: `url(${props.projectImg})`}}>
          <div className="projectDesc">
            <p>
              {props. projectDesc}
            </p> 
            <a href={props.projectLink} target="_blank">
                <button id="viewProject">view</button>
            </a>
          </div>
        </div>
    );
}
export default Project;