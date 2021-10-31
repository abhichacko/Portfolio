import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  .education-item {
    min-height: 14vh;
    width: 83%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid ${(props) => props.theme.designColor};
    padding: 1.2rem;
    position: relative;
  }
  .education-name {
    &::before {
      top: 26px;
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
  }
  .education-details {
    margin-top: 0.7rem;
  }
  h1 {
    margin: 3rem;
  }
`;
