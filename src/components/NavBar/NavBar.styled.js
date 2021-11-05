import styled from "styled-components";

export const StyleWrapper = styled.div`
  .logo {
    width: 4rem;
    height: 4rem;
    &:hover {
      transform: scale(1.2);
    }
    @media screen and (max-width: 500px) {
      //do Smth
      width: 3rem;
      height: 3rem;
    }
  }
  .navbar {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: ${(props) => props.theme.background};
    background-image: url(${(props) => props.theme.backgroundImage}) !important;
    background-attachment: fixed;
    background-size: cover;
  }
  .dropdown-toggle::after {
    display: none;
  }

  .navbar-nav .nav-link {
    /* color: ${(props) => props.theme.fontColor} !important; */
    color: ${(props) => props.theme.designColor};
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-left: 2.5rem !important;
    text-align: center;
    cursor: pointer;
    caret-color: transparent;
    &:hover {
      color: ${(props) => props.theme.fontColor};
    }
    &.active {
      border-left: solid 0.3rem ${(props) => props.theme.designColor} !important;
      color: ${(props) => props.theme.fontColor} !important;
      text-decoration: none !important;

      @media screen and (max-width: 500px) {
        //do Smth
        border-left: none;
      }
    }
    &::after {
      content: "";
      display: flex;
      width: 0%;
      height: 2px;
      /* background: ${(props) => props.theme.fontColor}; */
      background: ${(props) => props.theme.designColor};
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
    @media screen and (max-width: 500px) {
      //do Smth
      margin-left: 0rem !important;
    }
  }
  .theme-icon {
    /* color: ${(props) => props.theme.fontColor}; */
    color: ${(props) => props.theme.designColor};
    font-size: 1.8rem;
    margin-left: 2rem;
    &:hover {
      transform: scale(1.8);
    }
    @media screen and (max-width: 500px) {
      //do Smth
      margin-left: 0rem !important;
    }
  }

  .navbar-collapse {
    text-align: center;
  }
  .download-icon {
    font-size: 2rem;
  }
`;
