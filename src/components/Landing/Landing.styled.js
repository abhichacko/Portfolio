import styled from "styled-components";

export const BodyWrapper = styled.div`
  /* height: 250vh; */
  background-color: ${(props) => props.theme.background};
  background-image: url(${(props) => props.theme.backgroundImage}) !important;
  background-attachment: fixed;
  background-size: cover;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    cursor: pointer !important;
    caret-color: transparent;
  }
  .devloper-name {
    color: ${(props) => props.theme.fontColor};
    margin: 4rem 0 4rem 0;
  }
`;
