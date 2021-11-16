import styled from "styled-components";

export const StyleWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin: 10.5rem 0 4rem 0;
  .social-icon {
    font-size: 4rem;
    color: ${(props) => props.theme.designColor};
    &:hover {
      transform: scale(1.5);
    }
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  a {
    color: ${(props) => props.theme.designColor};
  }
  .social-wrapper {
    margin: 2rem;
    @media only screen and (max-width: 600px) {
      margin: 1rem;
    }
  }
`;
