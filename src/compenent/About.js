import React from "react";

const About = () => {
  return (
    <div className="bg2 section">
      <div className="container py-4">
        <div className="text-center pb-2" style={{ color: "#5E5D5F" }}>
          <h2>About Me</h2>
        </div>
        <div className="row pt-5 justify-content-center ">
          <div className="col-4 fontcolor">
            <h3>About Me</h3>
          </div>
          <div className="col-7 fontcolor">
            <p>
              Strong in design and integration with intuitive problem-solving
              skills. Proficient in HTML5, CSS, JAVASCRIPT, Bootstrap , ReactJs
              and SQL.Looking to start the career as an entry-level software
              engineer with a reputed firm driven by technology.
            </p>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-4 fontcolor">
            <h3>My Skills</h3>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <p>
                HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACTJS, MongoDB, React-Icon.
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-4 mx-1 fontcolor">
            <h3>Education</h3>
          </div>
          <div className="col-7 fontcolor">
            <p>2016-17 [ SSC ] [ Shri Balaji Public School Takawade ]</p>
            <p>2018-19 [ HSC ] [ Kishoor Career Point Ichalkaranji ]</p>
            <p>
              2019-2023 [ B.Tech ] [ Computer Science & Engineering ][ DKTE Society's Textile and Engineering Institute,
              Ichalkaranji ]
            </p>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-4 fontcolor">
            <h3>Internship</h3>
          </div>
          <div className="col-7">
            <div className="fontcolor">
              <a className="intern" href="/"><p>
                Envision Training Institute, Pune
              </p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
