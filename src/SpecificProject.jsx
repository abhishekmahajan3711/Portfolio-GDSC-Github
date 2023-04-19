import React from "react";
import "./css_modules/MainPageStyles.css";

export default function SpecificProject(props) {
  return (
    <div className="project-card">
      <h2 className="project-card-title">{props.title}</h2>
      <img className="project-card-img" src={props.src} alt="" />
      <p className="project-card-description">{props.description}</p>
    </div>
  );
}
