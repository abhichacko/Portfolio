import { useSelector } from "react-redux";
import { StyledWrapper } from "./Education.styled";

const Education = () => {
  const educationDetails = useSelector((state) => state.educationDetails);
  return (
    <StyledWrapper
      className="d-flex flex-column w-100 align-items-center "
      id="education"
    >
      <h1>Education</h1>
      {educationDetails &&
        educationDetails.map((item) => {
          return (
            <div className="education-item" key={item.educationName}>
              <div className="d-flex flex-row  align-items-center justify-content-between">
                <div className="education-name">
                  <h4> {item.educationName}</h4>
                </div>
                <div>
                  <h5> {item.year}</h5>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <h5>{item.collegeName}</h5>
                <h6>{item.location}</h6>
              </div>
              <div className="education-details">
                <p>{item.details}</p>
              </div>
            </div>
          );
        })}
    </StyledWrapper>
  );
};

export default Education;
