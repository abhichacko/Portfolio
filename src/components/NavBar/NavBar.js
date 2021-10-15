import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  LogoWrapper,
  NavBarWrapper,
  NavWrapper,
  LinkWrapper,
} from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <LogoWrapper>Ab</LogoWrapper>
      <NavWrapper className="flex-md-row flex-sm-column">
        <LinkWrapper>Skills</LinkWrapper>
        <LinkWrapper>Project</LinkWrapper>
      </NavWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
