import React from "react";
import rahul2 from "../Images/1O5A6247 copy.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg2 py-3">
      <Container>
        <div>
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-lg-8 text-center  ">
              <div className=" top-margin align-items-center">
                <h4 style={{ color: "#B4BECC" }}>Welcome to my world</h4>
              </div>
              <div>
                <h1 style={{ fontSize: "60px", color: "white" }}>
                  Hii I'm{" "}
                  <span style={{ color: "#FF014F" }}>Rahul Bharadia </span>{" "}
                </h1>
              </div>
              <div>
                <h3 style={{ color: "#B4BECC" }}>Frontend Developer</h3>
              </div>

              <div className="mt-4 pb-4">
                <Link to="/Resume/Rahul_Bharadia.pdf" target="_blank_" className="main-btn">
                  Download CV
                </Link>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 text-center b21 ">
              <img
                src={rahul2}
                alt="mineimage"
                className=" img-fluid"
                width="90%"
                height="70%"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
