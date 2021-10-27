import { FaHtml5, FaSass, FaGitAlt, FaProjectDiagram } from "react-icons/fa";
import {
  SiJavascript,
  SiCss3,
  SiReact,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";
import { StyleWrapper } from "./SkillCard.styled";

const SkillCard = (props) => {
  const getIcon = (skillName) => {
    switch (skillName) {
      case "HTML":
        return <FaHtml5 className="icon" />;
      case "CSS":
        return <SiCss3 className="icon" />;
      case "JavaScript":
        return <SiJavascript className="icon" />;
      case "SASS":
        return <FaSass className="icon" />;
      case "React JS":
        return <SiReact className="icon" />;
      case "Redux":
        return <SiRedux className="icon" />;
      case "Bootstrap":
        return <SiBootstrap className="icon" />;
      case "GIT":
        return <FaGitAlt className="icon" />;
      case "Agile":
        return <FaProjectDiagram className="icon" />;
      default:
        return <FaHtml5 className="icon" />;
    }
  };

  return (
    <StyleWrapper className="d-flex align-items-center flex-column">
      {getIcon(props.skillName)}
      <h4>{props.skillName}</h4>
    </StyleWrapper>
  );
};

export default SkillCard;
