import React from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/openSource/Projects.json";

import "./projects.css";
import ProjectsImg from "./ProjectImg";

const Projects = ({ theme }) => {
  return (
    <div className="projects-main">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo, index) => {
          return <GithubRepoCard key={index} repo={repo} theme={theme} />;
        })}
      </div>
      {/* <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/ashutosh1919"
        newTab={true}
        theme={theme}
      /> */}
    </div>
  );
};

export default Projects;
