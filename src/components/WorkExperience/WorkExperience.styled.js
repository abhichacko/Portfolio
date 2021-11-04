import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin: 4rem 0 4rem 0;
  .workexperience-item {
    min-height: 14vh;
    width: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid ${(props) => props.theme.designColor};
    padding: 1.2rem;
    position: relative;
  }
  .workexperience-name {
    &::before {
      top: 26px;
      left: -9px;
      width: 17px;
      height: 17px;
      content: "";
      position: absolute;
      /* border-radius: 50%; */
      background-color: ${(props) => props.theme.designColor};
    }
  }
  p {
    word-wrap: wrap;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .work-details {
    margin-top: 1rem;
  }
  h1 {
    margin: 3rem;
  }
  @media only screen and (max-width: 600px) {
    .workexperience-name {
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
