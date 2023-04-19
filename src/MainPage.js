import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainPge() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
