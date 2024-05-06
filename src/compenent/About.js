import React from "react";
import AboutDesc from "./AboutDesc";

const About = () => {
  return (
    <div className="bg2 section">
      <div className="container py-4">
        <div className="text-center pb-2" style={{ color: "#5E5D5F" }}>
          <h2>About Me</h2>
        </div>
        <div className="row pt-2 justify-content-center ">
          <div className="col-10 text-center  fontcolor">
            <p>
              <span style={{ color: "#FF014F", fontWeight: "600" }}>
                Tech-Enthusiast
              </span>
              with a can-do attitude aims to use my well-honed skills to develop
              state-of-the-art scalable software solutions. Always curious to
              solve problems.
              <br />
            </p>
          </div>
        </div>

        <AboutDesc
          title="Programming Languages"
          tech="HTML,CSS,JavaScript, Python "
        />
        <AboutDesc title="Framework" tech="Tailwind, Bootstrap, Django." />
        <AboutDesc
          title="Cloud Technologies & Tools"
          tech="Amazon web services(AWS) "
        />
        <AboutDesc title="Version Control System" tech="Git " />
        <AboutDesc title="Database" tech="PostgreSQL, SQL. " />
        <AboutDesc title="Devops" tech="CI/CD, Jenkins" />
        <AboutDesc title="Story Tracking" tech="Jira" />
      </div>
    </div>
  );
};

export default About;
