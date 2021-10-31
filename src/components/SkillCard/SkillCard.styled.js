import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: inline-block;
  .icon {
    font-size: 5rem;
    margin: 1rem;
    color: ${(props) => props.theme.designColor};
  }
`;
