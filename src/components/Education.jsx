import React, { useEffect, useRef } from "react";
import "./Education.stylesheet.scss";
import Course from "./course";
import universityImg from "./images/ymca-university.jpg";
import googlrCertificateImg from "./images/google-certificate-ronak.png";
import freeCodeCampDsa from './images/freeCodeCamp_dsa.png';
import udemyDsa from './images/udemy_dsa.png';
import myAvatar from "./images/avatar1.png";
import Draggable from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

const DraggableBox = ({ id, children }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id}>
        {children}
      </div>
    </Draggable>
  );
};

const Education = () => {
  const [line1, setLine1] = React.useState(null);
  const [line2, setLine2] = React.useState(null);
  const box1Ref = useRef(null);
  const handleDrag = () => {
    line1.position();
    line2.position();
  };

  return (
    <div className="education">
      <h1 className="heading">
        Certifications
      </h1>

      <div className="set">
        <Xwrapper>
          {/* <Course
          courseImg={universityImg}
          courseName="B.Voc - Web development"
          courseType="Graduation (2019 - 2022)"
          courseStatus="bachelor's in software engineering"
          completed={true}
        />
        <Course
          courseImg={googlrCertificateImg}
          courseName="Google - Digital Marketing Certificate"
          courseType="Certification"
          courseStatus="Certified"
          completed={true}
        /> */}
          <DraggableBox id="item1" className="zoomin_scroll">
            <img src={googlrCertificateImg} />
            <div></div>
          </DraggableBox>
          <DraggableBox id="item2" className="zoomin_scroll">
            <img src={freeCodeCampDsa} />
          </DraggableBox>
          <DraggableBox id="item3" className="zoomin_scroll">
            <img src={udemyDsa} />
          </DraggableBox>

          {/* <h1 id="elem2">ronak</h1> */}

          <DraggableBox id="my_avtar_img">
            <img src={myAvatar} />
          </DraggableBox>
          <Xarrow
            start="my_avtar_img"//can be react ref
            end="item1"
            strokeWidth={3}
            dashed
          />
          <Xarrow
            start="my_avtar_img"//can be react ref
            end="item2"
            strokeWidth={3}
            dashed
          />
          <Xarrow
            start="my_avtar_img"//can be react ref
            end="item3"
            strokeWidth={3}
            dashed
          />
        </Xwrapper>
      </div>
    </div>
  );
};
export default Education;
