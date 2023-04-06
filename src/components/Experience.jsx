import React from 'react'
import './Experience.stylesheet.scss';
import data from "./experience.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = ({ i, title, date, time, technicalSkills, responsibilities }) => {
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
                            <ExperienceCard i={`${i + 1}`} title={exp.jobTitle} date={exp.timeSpan} time={exp.time} technicalSkills={exp.technicalSkills.join(" &#183; ")} responsibilities={exp.Responsibilities.join(" &#183; ")} />
                        ))
                    }
                    {/* <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                <div class="timeline__event__icon">
                    <i class="lni-burger"></i>

                </div>
                <div class="timeline__event__date">
                    20-08-2019
                </div>
                <div class="timeline__event__content">
                    <div class="timeline__event__title">
                        Lunch
                    </div>
                    <div class="timeline__event__description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div class="timeline__event__icon">
                    <i class="lni-slim"></i>

                </div>
                <div class="timeline__event__date">
                    20-08-2019
                </div>
                <div class="timeline__event__content">
                    <div class="timeline__event__title">
                        Exercise
                    </div>
                    <div class="timeline__event__description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>

                </div>
            </div>
            <div class="timeline__event animated fadeInUp timeline__event--type1">
                <div class="timeline__event__icon">
                    <i class="lni-cake"></i>

                </div>
                <div class="timeline__event__date">
                    20-08-2019
                </div>
                <div class="timeline__event__content">
                    <div class="timeline__event__title">
                        Birthday
                    </div>
                    <div class="timeline__event__description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
                    </div>
                </div>
            </div> */}

                </div>
            </div>
        </div>
    )
}

export default Experience