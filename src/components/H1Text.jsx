import React from "react";

const H1Text = ({ text, fontWeight='bolder', span, big} ) => {
  return (
    <div>
      <h1 className={`h1-text ${fontWeight} ${big}`} data-aos="fade-right" data-aos-duration="700">
        {text}<span>{ span }</span>
      </h1>
    </div>
  );
};

export default H1Text;
