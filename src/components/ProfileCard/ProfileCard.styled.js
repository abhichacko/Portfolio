import styled from "styled-components";

export const ProfileWrapper = styled.div`
  /* min-height: 20vh; */
  width: 85vw;
  margin-top: 25vh;
  color: ${(props) => props.theme.fontColor};
  border-radius: 0.8%;
  background-color: transparent;
  .nameWrapper {
    text-align: start;
    margin: 2rem 2rem 0rem 2rem;
  }
  .designationWrapper {
    text-align: start;
    margin: 0.5rem 2rem 0rem 2rem;
    font-size: 3.5rem;
    font-weight: bold;
  }
  .profileSummaryWrapper {
    margin-top: 2rem;
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.5rem;
    font-weight: 600;
  }
  img {
    width: 20vw;
    height: 20vw;
    object-fit: cover;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 20vh;
    img {
      width: 50vw;
      height: 50vw;
      margin-top: 1rem;
    }
    .profileSummaryWrapper {
      font-size: 1rem;
    }
    .nameWrapper {
      text-align: center;
      margin: 2rem 0rem 0rem 0rem;
    }
    .designationWrapper {
      text-align: center;
      margin: 0.5rem 0rem 0rem 0rem;
      font-size: 1.95rem;
    }
  }
`;
