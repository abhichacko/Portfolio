import styled from "styled-components";

export const SkillWrapper = styled.div`
  width: 85%;
  max-width: 85%;
  color: ${(props) => props.theme.fontColor};

  .skill-card {
    width: 100%;
    height: 100%;
  }
  h1 {
    margin: 3rem;
  }
`;
