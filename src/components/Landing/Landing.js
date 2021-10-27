import React from "react";

import { BodyWrapper } from "./Landing.styled";
import NavBar from "../NavBar/NavBar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Skill from "../Skill/Skill";

const Landing = (props) => {
  return (
    <BodyWrapper>
      <NavBar></NavBar>

      <div className="container-fluid d-flex flex-column align-items-center">
        <ProfileCard />
        <Skill />
      </div>
    </BodyWrapper>
  );
};

export default Landing;
