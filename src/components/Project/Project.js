import React from "react";
import { StyleWrapper } from "./Project.styled";

import { useSelector } from "react-redux";

const Project = () => {
  const projects = useSelector((state) => state.projects);
  return (
    <StyleWrapper
      className=" d-flex flex-column align-items-center"
      id="projects"
    >
      <h1>Personal Projects</h1>

      <div className="d-flex w-100 justify-content-center flex-wrap">
        {projects.map((item) => {
          return (
            <div
              className="d-flex flex-column project-card"
              key={item.projectName}
            >
              <img src={item.imageUrl} alt="projectImage" />
              <div className="d-flex tech flex-row flex-wrap">
                {item.techStack.map((tech) => {
                  return <h6>{tech}</h6>;
                })}
              </div>
              <h4>{item.projectName}</h4>
              <p>{item.description}</p>
              <div className="d-flex justify-start button-wrapper">
                <a
                  href={item.visitLink}
                  className="btn btn-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={item.codeLink}
                  className="btn btn-success codeButton"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </StyleWrapper>
  );
};

export default Project;
