import React from "react";
import img1 from "../Images/Projects/3D corusal.png";
import img2 from "../Images/Projects/Pumeshoes.png";
import img3 from "../Images/Projects/olabike.png";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg2 section">
      <div className="container">
        <div className="text-center pb-3" style={{ color: "#5E5D5F" }}>
          <h2>Figma Projects</h2>
        </div>
        <div className="row justify-content-evenly ">
          <div className="col-12    col-lg-5 col-xl-4">
            <div className="card">
              <div className="image">
                <img src={img1} alt="img3" />
              </div>
              <div className="details">
                <div className="center">
                  <h1>
                    <Link
                      target="_blank_"
                      to="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=657%3A2&mode=design&t=KuepW0m5FnHSkYhq-1"
                    >
                      <BsLink45Deg />
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12    col-lg-5 col-xl-4">
            <div className="card">
              <div className="image">
                <img src={img2} alt="img3" />
              </div>
              <div className="details">
                <div className="center">
                  <h1>
                    <Link
                      target="_blank_"
                      to="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=601%3A11&mode=design&t=KuepW0m5FnHSkYhq-1"
                    >
                      <BsLink45Deg />
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12    col-lg-5 col-xl-4">
            <div className="card">
              <div className="image">
                <img src={img3} alt="img3" />
              </div>
              <div className="details">
                <div className="center">
                  <h1>
                    <Link
                      target="_blank_"
                      to="https://www.figma.com/file/hklG066lw3hf7s1PR5QIDr/Figma-basics?type=design&node-id=655%3A71&mode=design&t=KuepW0m5FnHSkYhq-1"
                    >
                      <BsLink45Deg />
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
