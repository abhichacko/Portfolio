import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: inline-block;
  .icon {
    font-size: 7rem;
    margin: 1.5rem;
    color: ${(props) => props.theme.fontColor};
  }
`;
