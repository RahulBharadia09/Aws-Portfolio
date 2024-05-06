import React from "react";
import img1 from "../Images/Projects/img1.jpg";
import img2 from "../Images/Projects/img2.jpg";
import img3 from "../Images/Projects/img3.jpg";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import FigmaDes from './FigmaDes'

const Projects = () => {
  return (
    <div className="bg2 section">
      <div className="container">
        <div className="text-center pb-3" style={{ color: "#5E5D5F" }}>
          <h2>Projects</h2>
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
                    <Link target="_blank_" to="http://top-fit.s3-website.ap-south-1.amazonaws.com/">
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
                    <Link target="_blank_" to="http://etrain1.s3-website.ap-south-1.amazonaws.com/">
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
                    <Link target="_blank_" to="http://hospital3.s3-website.ap-south-1.amazonaws.com/">
                      <BsLink45Deg />
                    </Link>
                    
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FigmaDes/>
    </div>
  );
};

export default Projects;
