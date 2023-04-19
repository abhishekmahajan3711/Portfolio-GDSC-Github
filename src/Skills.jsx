import React from "react";
import { useState } from "react";
import "./css_modules/MainPageStyles.css";

export default function Skills() {
  const [state, changeState] = useState(false);

  return (
    <div id="skills" className="Skills">
      <div
        data-aos="slide-right"
        data-aos-duration="1000"
        className="skills-head-div"
      >
        <p className="skills-head">Skills</p>
      </div>
      <div className="skills-list-div">
        <ul>
          <li className="skills-main">Frontend</li>
          <ul>
            <li>HTML,CSS</li>
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="1500"
              className="skills-bar a1"
            ></div>
            <li>React JS</li>
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="skills-bar a2"
            ></div>
            <li>jQuery</li>
            <div
              data-aos="flip-right"
              data-aos-delay="150"
              data-aos-duration="1500"
              className="skills-bar a3"
            ></div>
          </ul>
          <li className="skills-main">Backend</li>
          <ul>
            <li>Node JS</li>
            <div
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="1500"
              className="skills-bar a4"
            ></div>
            <li>MongoDB</li>
            <div
              data-aos="flip-right"
              data-aos-delay="250"
              data-aos-duration="1500"
              className="skills-bar a5"
            ></div>
            <li>Firebase</li>
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="skills-bar a6"
            ></div>
          </ul>
          <li className="skills-main">DSA and OOPs in C++</li>
          <div
            data-aos="flip-right"
            data-aos-delay="10"
            data-aos-duration="1500"
            className="skills-bar a7"
          ></div>
        </ul>
      </div>
      <img className="skills-img" src="../images/Skills.png" alt="" />
      {state === false ? (
        <img
          className="smile-img"
          onMouseOver={() => changeState(true)}
          src="../images/Smile1.png"
          alt=""
        />
      ) : (
        <img
          className="smile-img"
          onMouseOut={() => changeState(false)}
          src="../images/Smile2.png"
          alt=""
        />
      )}
    </div>
  );
}
