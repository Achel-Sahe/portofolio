import React from "react";
import TextHero from "./textHero";
import "./comps.css";
import Stack from "./galerySlide";
import img3 from "../image/foto3.jpeg";
import img1 from "../image/hero.jpeg";
import img2 from "../image/foto2.jpeg";
import img4 from "../image/foto4.jpeg";
const Hero = () => {
    const images = [img1, img2, img3, img4];
  return (
    <div className="hero-section">
      <TextHero />
      <div className="right-hero">
        <div
          className="right-about-stack"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Stack
            randomRotation
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ))}
            autoplay
            autoplayDelay={2000}
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
