import React from "react";
import PText from "./PText";
import H1Text from "./H1Text";
import Description from "./description";
import SocialCard from "./socialCard";

const sapa = [
    {
        label: 'Say Hello',
        icon: 'ti ti-mail',
        link: 'mailto:achelsahetapy10@gmail.com'
    },
    {
        label: 'View Resume',
        icon: 'ti ti-file-cv',
        link: ''
    }
]

const media = [
    {
        label: 'Github',
        icon: 'ti ti-brand-github',
        link : 'https://github.com/Achel-Sahe'
    },
    {
        label: 'Instagram',
        icon: 'ti ti-brand-instagram',
        link : 'https://www.instagram.com/chelo.shtpy/'
    },
    {
        label: 'LinkedIn',
        icon: 'ti ti-brand-linkedin',
        link : 'https://www.linkedin.com/in/marcelino-sahetapy/'
    }
]

const ContactSection = () => {
  return (
    <div className="contact-wrap">
      <div className="available">
        <i class="fi fi-rr-dot-circle"></i>
        <p>Available for work</p>
      </div>
      <br />
      <br />
      <PText text={"CONTACT"} />
      <br />
      <H1Text text={"HAVE AN IDEA?"} fontWeight="lighter" />
      <H1Text text={"LET'S MAKE IT WORK"} fontWeight="lighter" span={"WORK"} />
      <br />
      <Description
        text={
          "Whether it's a freelance project, a full-time role, or just a conversation — my inbox is always open."
        }
          />
          <div className="sapa-btn" data-aos="zoom-in-up" data-aos-duration="1000">
              {sapa.map((s) => (
                  <a href={s.link}>
                      <SocialCard social={s.label} link={s.icon}/>
                  </a>
              ))}
          </div>
          <div className="v-line" data-aos="fade" data-aos-duration="1000"></div>
          <div className="social-btn">
              {media.map((m) => (
                  <a href={m.link} data-aos="fade-up" data-aos-duration="1000">
                      <SocialCard social={m.label} link={m.icon} />
                  </a>
              ))}
          </div>
    </div>
  );
};

export default ContactSection;
