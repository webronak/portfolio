import React from "react";
import "./Education.stylesheet.scss";
import Course from "./course";
import universityImg from "./images/ymca-university.jpg";
import googlrCertificateImg from "./images/google-certificate-ronak.png";

const Education = () => {
  return (
    <div className="education">
      <h1 className="heading">
        My Education
      </h1>

      <div className="set">
        <Course
          courseImg={universityImg}
          courseName="B.Voc - Web development"
          courseType="Graduation"
          courseStatus="Persuing... (In 2nd Year)"
          completed={false}
        />
        <Course
          courseImg={googlrCertificateImg}
          courseName="Google - Digital Marketing Certificate"
          courseType="Certification"
          courseStatus="Certified"
          completed={true}
        />
      </div>
    </div>
  );
};
export default Education;
