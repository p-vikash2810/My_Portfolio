import React from "react";
import "./education.css";
import Education from "../../containers/education/Education";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";

const EducationComponent = ({ theme }) => {
  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifcations
              </h3>
              {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
            </div>
          </div>
        </Fade>
        <Education theme={theme} />
        <Certifications theme={theme} />
      </div>
     
    </div>
  );
};

export default EducationComponent;
