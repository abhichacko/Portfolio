import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  .education-item {
    min-height: 14vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid #09bead;
    padding: 1rem;
    position: relative;
  }
  .education-name {
    &::before {
      top: 22px;
      left: -9px;
      width: 16px;
      height: 16px;
      content: "";
      position: absolute;
      border-radius: 50%;
      background-color: #09bead;
    }
  }
  p {
    word-wrap: wrap;
    word-break: break-all;
  }
`;
