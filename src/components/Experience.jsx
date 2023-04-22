import React from 'react'
import './Experience.stylesheet.scss';
import data from "./experience.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = ({ i, title, date, time, technicalSkills, responsibilities, company }) => {
    return (
        <div className={`timeline__event  animated fadeInUp delay-3s timeline__event--type${i}`}>
            <div className="timeline__event__icon ">
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="timeline__event__date">
                {date}
                <br />
                {`( ${time} )`}
            </div>
            <div className="timeline__event__content ">
                <div className="timeline__event__title">
                    {title}
                </div>
                <div className="timeline__event__subtitle">
                    @{company}
                </div>
                <div className="timeline__event__description">
                    <div className="timeline__event__description_subhead" >Technical kills</div>
                    <p dangerouslySetInnerHTML={{ __html: technicalSkills }}></p>
                    <div className="timeline__event__description_subhead" >Responsibilities</div>
                    <p dangerouslySetInnerHTML={{ __html: responsibilities }}></p>
                </div>
            </div>
        </div>
    )
}

const Experience = () => {

    return (
        <div className='timeline-container'>

            <h1 className="heading">
                Experience
            </h1>
            <div className='set'>
                <div className="timeline">
                    {
                        data.reverse().map((exp, i) => (
                            <ExperienceCard i={`${i + 1}`} title={exp.jobTitle} date={exp.timeSpan} time={exp.time} company={exp.company} technicalSkills={exp.technicalSkills.join(" &#183; ")} responsibilities={exp.Responsibilities.join(" &#183; ")} />
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Experience