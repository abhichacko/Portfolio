import styled from "styled-components";

export const BodyWrapper = styled.div`
  /* height: 250vh; */
  background-color: ${(props) => props.theme.background};
  background-image: url(${(props) => props.theme.backgroundImage}) !important;
  background-attachment: fixed;
  background-size: cover;
`;
