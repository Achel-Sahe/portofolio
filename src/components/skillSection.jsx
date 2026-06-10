import React from "react";
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";
import SectionLine from "./SectionLine";
import SkillsCard from "./skillsCard";

const skills = {
  frontend : [
    {
      nama: "HTML",
      icon: "https://cdn.simpleicons.org/html5/E34F26"
    },
    {
      nama: "CSS",
      icon: "https://cdn.simpleicons.org/css/1572B6"
    },
    {
      nama: "Tailwind",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      nama: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    { nama: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  ],
  backend: [
    { nama: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { nama: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  tools: [
    { nama: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { nama: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    {
      nama: "VSCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ],
};

const categories = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Tools", items: skills.tools },
];

const SkillSection = () => {
  return (
    <div className="skills-section">
      <div className="text-skills">
        <PText text="WHAT I WORK WITH" />
        <H1Text text="My" span="Skills" fontWeight="lighter" big="big" />
        <Description
          text={"Technologies and tools I use to build interactive experiences"}
        />
      </div>
      {categories.map((cat) => {
        return (
          <div> 
            <div data-aos="fade-right" data-aos-duration={1000 + 100 * cat}>
            <SectionLine text={cat.label} />
            </div>
            <br />
            <div className="skills-grid">
              {cat.items.map((item) => {
                return (
                  <div
                    data-aos="zoom-in-up"
                    data-aos-duration={800 + 100 * item}
                  >
                    <SkillsCard
                      language={item.nama}
                      img={item.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
