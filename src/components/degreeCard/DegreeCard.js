import React from "react";
import "./degreeCard.css";
import { Fade, Flip } from "react-reveal";

const DegreeCard = ({ degree, theme }) => {
  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div className="card-img">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              // transform: "scale(50%, 50%)",
              // width: "100%",
              // height: "100%",
            }}
            src={require(`../../assests/images/${degree.logo_path}`).default}
            // src={itmu_logo}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div className="card-body">
          <div
            className="body-header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => {
              return (
                <p
                  key={index}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="visit-btn"
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className="btn" style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default DegreeCard;
