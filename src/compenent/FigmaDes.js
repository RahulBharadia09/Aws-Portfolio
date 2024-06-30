import React from "react";
import img1 from "../Images/Projects/3D corusal.png";
import img2 from "../Images/Projects/Pumeshoes.png";
import img3 from "../Images/Projects/olabike.png";
import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="bg2 section">
      <div className="container">
        <div className="text-center pb-3" style={{ color: "#5E5D5F" }}>
          <h2>Figma Projects</h2>
        </div>
        <div className="row gap-2 justify-content-evenly ">
          <Cards
            imgAlt="3d-carousal"
            imgName={img1}
            imgLink="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=657%3A2&mode=design&t=KuepW0m5FnHSkYhq-1"
          />
          <Cards
            imgAlt="puma"
            imgName={img2}
            imgLink="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=601%3A11&mode=design&t=KuepW0m5FnHSkYhq-1"
          />
          <Cards
            imgAlt="ola"
            imgName={img3}
            imgLink="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=655%3A71&mode=design&t=KuepW0m5FnHSkYhq-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
