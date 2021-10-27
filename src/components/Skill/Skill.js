import SkillCard from "../SkillCard/SkillCard";
import { SkillWrapper } from "./Skill.styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  let skillNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "SASS",
    "React JS",
    "Redux",
    "Bootstrap",
    "GIT",
    "Agile",
  ];
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "skill-card",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <SkillWrapper className="d-flex flex-column align-items-center">
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
