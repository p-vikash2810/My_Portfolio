import React from "react";
import "./projectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectLanguages = ({ logos }) => {
  console.log(logos);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo, index) => {
            return (
              <OverlayTrigger
                key={index}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
                  {/* <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span> */}
                  <img
                    style={{
                      maxWidth: "30px",
                      maxHeight: "100%",
                      // transform: "scale(50%, 50%)",
                      // width: "100%",
                      // height: "100%",
                    }}
                    src={
                      require(`../../assests/icons/${logo.iconifyClass}`)
                        .default
                    }
                    // src={itmu_logo}
                    alt={logo.name}
                  />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;
