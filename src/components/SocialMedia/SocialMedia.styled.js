import styled from "styled-components";

export const StyleWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  .social-icon {
    font-size: 4rem;
    &:hover {
      transform: scale(1.5);
    }
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  a {
    color: ${(props) => props.theme.fontColor};
  }
  .social-wrapper {
    margin: 2rem;
  }
`;
