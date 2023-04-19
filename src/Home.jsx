import React from "react";
import "./css_modules/MainPageStyles.css";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <div id="home" className="home-main-div">
      <div data-aos="slide-up" data-aos-duration="1000" className="text-div">
        <p data-aos="flip-down" data-aos-delay="800" className="home-text-1">
          Abhishek Mahajan
        </p>
        <TypeAnimation
          className="home-text-2"
          sequence={[
            "| Student at DYPCOE ",
            500,
            "| MERN Stack Developer ",
            500,
            "| Helper and Teacher ",
            500,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
