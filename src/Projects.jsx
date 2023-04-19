import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./css_modules/MainPageStyles.css";
//import SpecificProject from "./SpecificProject";

export default function Projects() {
  const content = [
    {
      title: "WebXplore Hackathon",
      img: "../images/SportsClub.png",
      link: "https://abhishekmahajan3711.github.io/SportsClub/",
      description:
        "Contestant in WebXplore hackathon which was orgainised by NSCC club of PCCOE,Pune. The challenge was to build the Sports Club Website and market it. ",
    },
    {
      title: "Idea Ignition",
      img: "../images/IdeaIgnition.jpeg",
      link: "https://www.linkedin.com/in/abhishek-mahajan-8a5a91252/recent-activity/shares/",
      description:
        "Participated in Idea Ignition at Technofiesta organized by Dr.D.Y. Patil Institute of Engineering, Management and Research.It was good to see different kind of ideas presented by different students.",
    },
    {
      title: "Sambhav Participation",
      img: "../images/Sambhav.png",
      link: "https://www.linkedin.com/company/sambhav-2k23/",
      description:
        "Sambhav technical event provided chance to paritcipate in Khoj (Idea pitching) and 7-bits hackathon (competitive programming). Also attended webinars.",
    },
    {
      title: "Skill-a-thon 1.0",
      img: "../images/Skill-a-thon.png",
      link: "https://www.linkedin.com/in/abhishek-mahajan-8a5a91252/recent-activity/shares/",
      description:
        "Participated in Skill-a-thon 1.0 (Skilling Hackathon) conducted by EkStep Foundation and HackerEarth. Unfortunately we were out in the first phase, but indeed it was good experience",
    },
  ];

  return (
    <div className="projects">
      <div>
        <TypeAnimation
          className="project-head-text"
          sequence={["Projects  ", 500, "Participations", 500]}
          repeat={Infinity}
        />
      </div>
      <div id="project" className="projects-actual">
        {content.map((item, index) => {
          return (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-duration="1500"
              className="project-card"
            >
              <h2 className="project-card-title">{item.title}</h2>
              <img className="project-card-img" src={item.img} alt="" />
              <a className="project-card-link" href={item.link}>
                Click here to get full information
              </a>
              <p className="project-card-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
