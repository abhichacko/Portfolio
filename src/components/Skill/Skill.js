import SkillCard from "../SkillCard/SkillCard";
import { SkillWrapper } from "./Skill.styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  let skillNames = [
    "HTML",
    "JavaScript",
    "React JS",
    "Redux",
    "CSS",
    "SASS",
    "Bootstrap",
    "Material UI",
    "GIT",
    "Agile",
    "Cypress",
  ];
  let settings = {
    dots: false,
    infinite: true,
    className: "skill-card",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 900,
    // cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
        },
      },
    ],
  };

  return (
    <SkillWrapper className="d-flex flex-column align-items-center" id="skills">
      <h1>Skills</h1>

      <Slider {...settings}>
        {skillNames.map((skill) => {
          return (
            <div>
              <SkillCard skillName={skill} />
            </div>
          );
        })}
      </Slider>
    </SkillWrapper>
  );
};

export default Skill;
