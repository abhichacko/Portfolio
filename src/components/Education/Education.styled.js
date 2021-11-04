import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin: 4rem 0 4rem 0;
  .education-item {
    min-height: 30vh;
    width: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid ${(props) => props.theme.designColor};
    padding: 1.2rem;
    position: relative;
  }
  .education-name {
    margin: 0.5rem 0 0.5rem 0;
    &::before {
      top: 39px;
      left: -9px;
      width: 16px;
      height: 16px;
      content: "";
      position: absolute;
      border-radius: 50%;
      background-color: ${(props) => props.theme.designColor};
    }
  }
  p {
    word-wrap: wrap;
    text-align: justify;
    text-justify: inter-word;
    font-weight: 600;
    margin-top: 1rem;
  }
  .education-details {
    margin-top: 0.7rem;
  }
  h1 {
    margin: 3rem;
  }
  @media only screen and (max-width: 600px) {
    .education-name {
      max-width: 50%;
    }
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.9rem;
    }
    h6 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
