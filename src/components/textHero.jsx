import React from "react";
import './comps.css';
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";

const TextHero = () => {
  return (
    <div className="text-hero">
      <PText text='FRONTEND DEVELOPER'/>
      <H1Text text='Turning ideas into ' span='Digital Reality' big={'big'} fontWeight="lighter"/>
      <Description text='Creating immersive websites with modern frontend technologies.' />
      <div className="text-hero-button" data-aos="fade-right" data-aos-duration="1100">
        <a href="#project">
          <button>VIEW MY WORK</button>
        </a>
      </div>
      <div className="skills-wrapper" >
        <div className="skills-tech" data-aos="fade-right" data-aos-duration="1300">
          <img src="https://cdn.simpleicons.org/html5/E34F26" />
          <img src="https://cdn.simpleicons.org/css/1572B6" />
          <img src="https://cdn.simpleicons.org/javascript/F7DF1E" />
          <img src="https://cdn.simpleicons.org/react/61DAFB" />
          <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" />
          <img src="https://cdn.simpleicons.org/github/FFFFFF" />
        </div>
      </div>
      
    </div>
  );
};

export default TextHero;
