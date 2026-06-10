import React from "react";
import img from "../image/final-hero.jpg";
import "./comps.css";
import img1 from "../image/tuhaha.png";
import img2 from "../image/nengnanum.png";
import img3 from "../image/bokurce.png";

const projects = [
  {
    label: "Negeri Tuhaha",
    project: "Tuhaha.id",
    description: "Official government website, live & production, real client",
    tech: ["HTML", "CSS", "JavaScript"],
    img: img1,
    link : 'https://tuhaha.id'
  },
  {
    label: "Nengnanum Beauty",
    project: "Nengnanum Beauty",
    description: "Skincare brand multi-page React, GSAP, Lenis",
    tech: ["React", "GSAP", "WebGL"],
    img: img2,
    link : 'https://achel-sahe.github.io/skincare-website-nengnanum-beauty/'
  },
  {
    label: "Bokurce Library",
    project: "Bokurce Library",
    description: "Library management system, PHP + MySQL, Stack data structure",
    tech: ["PHP", "MySQL", "CSS", "JavaScript", "GSAP"],
    img: img3,
    link : 'https://bokurce-library.lovestoblog.com/'
  },
];

const ProjectCard = () => {
  return (
    <div>
      {projects.map((cat, index) => (
        <a href={cat.link} key={index}>
        <div className="project-card " data-aos="zoom-in-up" data-aos-duration='1000'>
          <div className="project-kiri">
            <div className="label">{String(index + 1).padStart(2, "0")}</div>
            <div className="judul">
                <h1>{cat.label}</h1>
                <p className="description" style={{color: '#717171'}}>{ cat.description }</p>
              <div className="btn">
                {cat.tech.map((tech) => (
                  <button key={tech}>{tech}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="project-kanan">
            <img src={cat.img} alt="" />
            <i class="fi fi-rr-angle-right"></i>
          </div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectCard;
