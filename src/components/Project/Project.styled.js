import styled from "styled-components";

export const StyleWrapper = styled.div`
  h1 {
    margin: 3rem;
    color: ${(props) => props.theme.fontColor};
  }
  .project-card {
    margin-right: 10vh;
    margin-left: 10vh;
    background-color: white;
    border-radius: 2%;
    background-color: ${(props) => props.theme.background};
    background-image: url(${(props) => props.theme.backgroundImage}) !important;
    background-attachment: fixed;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.7rem;
    width: 35vw;

    @media only screen and (max-width: 600px) {
      width: 93vw;
      margin-right: 0;
      margin-left: 0;
      margin-top: 2rem;
    }
    @media only screen and (max-width: 800px) {
      width: 93vw;
      margin-right: 0;
      margin-left: 0;
      margin-top: 2rem;
    }
    img {
      margin-left: 0.4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;

      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .tech {
      margin-top: 1rem;
      h6 {
        background-color: ${(props) => props.theme.designColor};
        border-radius: 10%;
        padding: 0.5rem;
        margin-left: 0.5rem;
      }
      h6:nth-child(1) {
        /* margin-left: 0; */
      }
    }
    h4 {
      margin-top: 1rem;
      color: ${(props) => props.theme.fontColor};
      margin-left: 0.5rem;
    }
    p {
      margin-left: 0.5rem;
      color: ${(props) => props.theme.fontColor};
      word-wrap: wrap;
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    .button-wrapper {
      margin-top: 1rem;
    }
    .codeButton {
      margin-left: 4rem;
    }
  }
`;
