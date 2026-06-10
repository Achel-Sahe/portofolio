import React from "react";
import ScrollReveal from "./textScroll";
import Stack from "./galerySlide";
import MusicPlayer from "./music";
import img3 from "../image/third-hero.jpg";
import img1 from "../image/hero.jpeg";
import img2 from "../image/overlay.jpg";
import img4 from "../image/final-hero.jpg";

const About = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="about-wrapper" id="about">
      <div className="left-about">
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          baseRotation={4}
          blurStrength={15}
        >
          I build interactive experiences that combine clean code thoughtful
          design and smooth interactions
        </ScrollReveal>
      </div>
      <div className="right-about">
        <div className="right-about-stack" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-delay="300">
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
        <div className="right-about-music" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default About;