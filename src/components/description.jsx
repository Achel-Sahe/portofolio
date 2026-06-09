import React from "react";

const Description = ({text}) => {
  return (
    <div>
      <p className="description" data-aos="fade-right" data-aos-duration="900">
        {text}
      </p>
    </div>
  );
};

export default Description;
