import React from "react";

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
              </span> with a can-do attitude aims to use my well-honed skills to develop
              state-of-the-art scalable software solutions. Always curious to
              solve problems.
              <br />
              
            </p>
          </div>
        </div>

        <div className="row gap-4 pt-5  justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Programming Languages</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              HTML,CSS,JavaScript, Python 
              </p>
            </div>
          </div>
        </div>

        
        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Framework</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              Tailwind, Bootstrap, Django.
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Cloud Technologies & Tools:</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              Amazon web services(AWS).




              {/* 3D Coarousal */}
              {/* https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=657%3A2&mode=design&t=uq14mZN0Ct6xY8VP-1 */}

              {/* Ola bike */}
              {/* https://www.figma.com/proto/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=655-72&t=7i3QhPuEu0oFD3V2-0&scaling=scale-down&page-id=655%3A71 */}
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Version Control System :</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              Git, GitHub.
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Database:</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              PostgreSQL, MySQL. 
              </p>
            </div>
          </div>
        </div>



        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Devops:</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              CI/CD, Jenkins. 
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 pt-5 justify-content-between">
          <div className="col-4 fontcolor">
            <h4>Story Tracking:</h4>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
              Jira 
              </p>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default About;
