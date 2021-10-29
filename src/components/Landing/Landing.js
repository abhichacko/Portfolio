import React from "react";

import { BodyWrapper } from "./Landing.styled";
import NavBar from "../NavBar/NavBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Skill from "../Skill/Skill";
import SocialMedia from "../SocialMedia/SocialMedia";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";

const Landing = (props) => {
  return (
    <BodyWrapper>
      <NavBar></NavBar>

      <div className="container-fluid d-flex flex-column align-items-center">
        <ProfileCard />
        <Skill />
        <WorkExperience />
        <Education />
        <SocialMedia />
      </div>
    </BodyWrapper>
  );
};

export default Landing;
