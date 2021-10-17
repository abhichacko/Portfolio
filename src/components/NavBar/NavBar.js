import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { StyleWrapper } from "./NavBar.styled";
import { VscColorMode } from "react-icons/vsc";
import { THEMES } from "../../constants/theme";
import { changeTheme } from "../../actions/themeActions";

const NavBar = (props) => {
  const changeThemeName = (e) => {
    changeTheme(e);
  };
  return (
    <StyleWrapper>
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <div class="wrapper">
              <div class="circle">
                <span id="text">Ab</span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto justify-content-md-center">
              <Nav.Link href="#features" className="mx-auto">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-auto">
                Skills
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-auto">
                Projects
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-auto">
                Contact
              </Nav.Link>
            </Nav>
            <NavDropdown
              title={<VscColorMode className="theme-icon" />}
              id="collasible-nav-dropdown"
              onSelect={changeThemeName}
            >
              <NavDropdown.Item eventKey={THEMES.LIGHT}>Light</NavDropdown.Item>
              <NavDropdown.Item eventKey={THEMES.DARK}>Dark</NavDropdown.Item>
              <NavDropdown.Item eventKey={THEMES.APPLE}>Apple</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyleWrapper>
  );
};

export default NavBar;
