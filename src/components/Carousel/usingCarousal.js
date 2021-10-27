import SkillCard from "../SkillCard/SkillCard";
import { SkillWrapper } from "./Skill.styled";
import Carousel from "../Carousel/Carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Skill = () => {
  let skillNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "SASS",
    "React JS",
    "Redux",
    "Bootstrap",
    "GIT",
    "Agile",
  ];
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("sm"));
  const large = useMediaQuery(theme.breakpoints.up("md"));
  const show = medium === true && large === true ? 4 : 1;
  return (
    <SkillWrapper className="d-flex flex-column align-items-center">
      <span>{`theme.breakpoints.up('sm') matches: ${medium} medium    --- ${large} large`}</span>
      <h1>Skills</h1>
      <div className="d-flex flex-row  flex-wrap">
        {skillNames.map((skill) => {
          return <SkillCard skillName={skill} />;
        })}
      </div>
      <>
        <div
          style={{
            maxWidth: `100%`,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 64,
          }}
        >
          <Carousel show={show}>
            {skillNames.map((skill) => {
              return (
                <div>
                  <SkillCard skillName={skill} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </>
    </SkillWrapper>
  );
};

export default Skill;
