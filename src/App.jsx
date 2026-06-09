import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/heroSection";
import Navbar from "./components/navbarSection";
import Particles from "./components/oriParticels";
import About from "./components/aboutSection";
import SideRays from "./components/overlay";
import SkillsCard from "./components/skillsCard";
import SkillSection from "./components/skillSection";
import Project from "./components/projectSection";
import ProjectCard from "./components/projectCard";
import ContactSection from "./components/contactSection";
function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 0, delay: 0 });
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          inset: 0,
          zIndex: "3",
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#000a1d"]}
          particleCount={300}
          particleSpread={15}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <SideRays />
      </div>
      <Navbar />
      <div
        style={{
          position: "relative",
          height: "100vh",
          zIndex: 1,
        }}
        id="home"
      >
        <Hero />
      </div>
      <div style={{ position: "relative", zIndex: 1 }} className="about-app">
        {" "}
        {/* tambah wrapper */}
        <About />
      </div>
      <div className="skills-app" id="skills">
        <SkillSection />
      </div>
      <div className="project-app" id="project">
        <Project />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
