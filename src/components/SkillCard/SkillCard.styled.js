import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: inline-block;
  .icon {
    font-size: 6rem;
    margin: 1.5rem;
    color: ${(props) => props.theme.designColor};
  }
`;
