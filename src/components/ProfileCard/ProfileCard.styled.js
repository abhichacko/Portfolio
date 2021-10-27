import styled from "styled-components";

export const ProfileWrapper = styled.div`
  min-height: 20vh;
  width: 85vw;
  margin-top: 10vh;
  color: ${(props) => props.theme.fontColor};
  border-radius: 0.8%;
  background-color: transparent;
  .nameWrapper {
    margin: 2rem 2rem 0rem 2rem;
  }
  .designationWrapper {
    margin: 2rem 2rem 0rem 2rem;
    font-size: 3rem;
    font-weight: bold;
  }
  .profileSummaryWrapper {
    margin: 2rem 2rem 0rem 2rem;
  }
`;
