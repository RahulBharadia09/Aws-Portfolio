import React from "react";
import img1 from "../Images/Projects/img1.jpg";
import img2 from "../Images/Projects/img2.jpg";
import img3 from "../Images/Projects/img3.jpg";
import FigmaDes from "./FigmaDes";
import Cards from "./Cards";

const Projects = (props) => {
  return (
    <div className="bg2 section">
      <div className="container">
        <div className="text-center pb-3" style={{ color: "#5E5D5F" }}>
          <h2>Projects</h2>
        </div>
        <div className="row justify-content-evenly ">
          <Cards
            imgAlt="top-fit"
            imgName={img1}
            imgLink="http://top-fit.s3-website.ap-south-1.amazonaws.com/"
          />
          <Cards
            imgAlt="Etrain"
            imgName={img2}
            imgLink="http://etrain1.s3-website.ap-south-1.amazonaws.com/"
          />
          <Cards
            imgAlt="hospital"
            imgName={img3}
            imgLink="http://hospital3.s3-website.ap-south-1.amazonaws.com/"
          />
        </div>
      </div>
      <FigmaDes />
    </div>
  );
};

export default Projects;
