import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StyleWrapper } from "./NavBar.styled";
import { MdNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { THEMES } from "../../constants/theme";
import { changeTheme } from "../../actions/themeActions";

const NavBar = () => {
  const [themeName, setThemeName] = useState(THEMES.DARK);
  const [toggleClass, setToggleClass] = useState("navbar-light");
  const changeThemeName = () => {
    changeTheme(themeName);
    if (themeName === THEMES.DARK) {
      setThemeName(THEMES.LIGHT);
      setToggleClass("navbar-dark");
    } else {
      setThemeName(THEMES.DARK);
      setToggleClass("navbar-light");
    }
  };
  return (
    <StyleWrapper>
      <Navbar collapseOnSelect expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <div class="wrapper">
              <div class="circle">
                <span id="text">Ab</span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={toggleClass}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            {themeName === THEMES.DARK ? (
              <MdNightlight className="theme-icon" onClick={changeThemeName} />
            ) : (
              <WiDaySunny className="theme-icon" onClick={changeThemeName} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyleWrapper>
  );
};

export default NavBar;
