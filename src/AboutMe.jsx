import React from "react";
import "./css_modules/MainPageStyles.css";

export default function AboutMe() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      id="about"
      className="About-div"
    >
      <p className="About-head-text">Something More About Me !!</p>
      <p className="About-info-text">
        I am a second-year computer engineering student at DY Patil College of
        Engineering, who is enthusiastic about learning and sharing knowledge.
        As a full-stack developer, I am always striving to expand my skillset
        and explore new areas of interest. Currently, I am working on Data
        Structures and Algorithms (DSA) and Competitive Programming (CP), which
        demonstrates my passion for computer science and problem-solving.
        Overall, I am a curious and driven individual with a passion for
        continuous learning and growth in this field.
      </p>
    </div>
  );
}
