import styled from "styled-components";

export const StyleWrapper = styled.div`
  .navbar {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .theme-icon {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
  }
  .navbar-nav .nav-link {
    color: ${(props) => props.theme.fontColor};
  }
  .dropdown-menu {
    background-color: ${(props) => props.theme.background};
    & .dropdown-item {
      color: ${(props) => props.theme.fontColor};
    }
  }

  body {
    background-color: #333;
  }
  .navbar-brand {
    > .wrapper {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
      width: 3.6rem;
      height: 3.6rem;
      > .circle {
        border-radius: 100%;
        width: 3.6rem;
        height: 3.6rem;
        border: 1px solid ${(props) => props.theme.logoBackground};
        display: block;
        box-shadow: 0px 6px 3px ${(props) => props.theme.logoBackground};
        cursor: pointer;
        > #text {
          font: Arial;
          font-size: 2rem;
          font-weight: bold;
          text-decoration: none !important;
          color: ${(props) => props.theme.logoBackground};
        }
      }
    }
  }
`;
