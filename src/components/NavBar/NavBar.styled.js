import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const NavBarWrapper = styled.div`
  background-color: ${(props) => props.theme.background};

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const LogoWrapper = styled.div`
  background: linear-gradient(
    213.94deg,
    ${(props) => props.theme.buttonColor1} 10.42%,
    ${(props) => props.theme.buttonColor2} 94.34%
  );
  border-radius: 50%;
  color: ${(props) => props.theme.fontColorWhite} !important;
  display: grid;
  font-size: 18px;
  font-weight: 800;
  height: 2.25rem;
  place-items: center;
  width: 2.25rem;
`;
export const NavWrapper = styled.div``;

export const LinkWrapper = styled.div``;
