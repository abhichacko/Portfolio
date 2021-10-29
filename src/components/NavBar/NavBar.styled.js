import styled from "styled-components";

export const StyleWrapper = styled.div`
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
    &:hover {
      color: ${(props) => props.theme.fontColor};
    }
    &.active {
      border-left: solid 0.3rem ${(props) => props.theme.designColor};
      color: ${(props) => props.theme.fontColor};

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
      border-radius: 100%;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
    @media screen and (max-width: 500px) {
      //do Smth
      margin-left: 0rem !important;
    }
  }
  .dropdown-menu {
    background-color: ${(props) => props.theme.background};
    background-image: url(${(props) => props.theme.backgroundImage});

    & .dropdown-item {
      color: ${(props) => props.theme.fontColor};
      /* font-weight: bold; */
      &:hover {
        background-color: ${(props) => props.theme.background};
      }
    }
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
        width: 3.8rem;
        height: 3.6rem;
        border: 1px solid ${(props) => props.theme.designColor};
        display: block;
        box-shadow: 0px 6px 3px ${(props) => props.theme.designColor};
        cursor: pointer;
        > #text {
          font-size: 2rem;
          font-weight: bold;
          text-decoration: none !important;
          color: ${(props) => props.theme.designColor};
        }
      }
    }
  }
  .navbar-collapse {
    text-align: center;
  }
`;
