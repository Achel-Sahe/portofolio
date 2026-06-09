import React from "react";

const SectionLine = ({text}) => {
  return (
    <div className="section-title">
    <span>{text}</span>
      <div className="line"></div>
    </div>
  );
};

export default SectionLine;
