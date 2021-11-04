import { useSelector } from "react-redux";
import { StyledWrapper } from "./WorkExperience.styled";

const WorkExperience = () => {
  const workExperience = useSelector((state) => state.workExperience);
  return (
    <StyledWrapper
      className="d-flex flex-column w-100 align-items-center "
      id="experience"
    >
      <h1>Work Experience</h1>
      {workExperience &&
        workExperience.map((item, index) => {
          return (
            <div
              className="workexperience-item"
              key={`${item.designation}-${index}`}
            >
              <div className="d-flex flex-row  align-items-center justify-content-between">
                <div className="workexperience-name">
                  <h4> {item.designation}</h4>
                </div>
                <div>
                  <h5> {item.year}</h5>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <h5>{item.companyName}</h5>
                <h6>{item.location}</h6>
              </div>
              <div className="work-details">
                {item.details.split("\n").map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </div>
            </div>
          );
        })}
    </StyledWrapper>
  );
};

export default WorkExperience;
