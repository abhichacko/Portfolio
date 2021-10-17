import styled from "styled-components";

export const BodyWrapper = styled.div`
  height: 200vh;
  background-color: ${(props) => props.theme.background};
  background-image: url(${(props) => props.theme.backgroundImage}) !important;
  background-attachment: fixed;
  background-size: cover;
`;
