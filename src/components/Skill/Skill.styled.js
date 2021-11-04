import styled from "styled-components";

export const SkillWrapper = styled.div`
  margin: 5rem 0 4rem 0;
  width: 85%;
  max-width: 85%;
  color: ${(props) => props.theme.fontColor};
  .slick-slider {
    margin: 2rem 0 2rem 0;
  }
  .skill-card {
    width: 100%;
    height: 100%;
  }
  h1 {
    margin: 3rem;
  }
`;
