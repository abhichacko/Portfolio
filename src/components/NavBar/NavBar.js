import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StyleWrapper } from "./NavBar.styled";
import { MdNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { HiCloudDownload } from "react-icons/hi";
import { THEMES } from "../../constants/theme";
import { changeTheme } from "../../actions/themeActions";
import { Link } from "react-scroll";
import resume from "../../assets/resume/AbhilashThankachan.ReactJS.pdf";
import logo from "../../assets/Ab_icon.png";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    setIsNavOpen(!isNavOpen);
  };

  return (
    <StyleWrapper>
      <Navbar
        collapseOnSelect={true}
        expand="md"
        fixed="top"
        expanded={isNavOpen}
        onToggle={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-170}
              duration={100}
              id="text"
              onClick={() => {
                if (isNavOpen) setIsNavOpen(!isNavOpen);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="logo"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Home"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={toggleClass}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Skills
              </Link>

              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Experience
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Projects
              </Link>

              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Education
              </Link>

              <Link
                to="connect"
                spy={true}
                smooth={true}
                offset={-300}
                duration={100}
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Contact
              </Link>
              <a
                href={resume}
                download="AbhilashThankachan-ReactJS.pdf"
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Resume
                <HiCloudDownload className="download-icon" />
              </a>
            </Nav>
            {themeName === THEMES.DARK ? (
              <MdNightlight
                className="theme-icon"
                onClick={changeThemeName}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Change Theme"
              />
            ) : (
              <WiDaySunny
                className="theme-icon"
                onClick={changeThemeName}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Change Theme"
              />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyleWrapper>
  );
};

export default NavBar;
