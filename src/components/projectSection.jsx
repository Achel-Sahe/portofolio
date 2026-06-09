import React from "react";
import H1Text from "./H1Text";
import PText from "./PText";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <div>
      <div className="ppp">
        <PText text={"WORK"} /> <br />
        <div className="h1">
          <H1Text
            text={"Featured "}
            span={"Projects"}
            fontWeight="lighter"
            big={"big"}
          />
        </div>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Project;
