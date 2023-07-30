import React from "react";
import rahul2 from "../Images/WhatsApp Image 2023-07-29 at 5.01.56 PM.jpeg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg2 py-3">
      <Container>
        <div className="row justify-content-center align-items-center section">
          <div className="col-12 col-lg-8 text-center  ">
            <div className=" top-margin align-items-center">
              <h4 style={{ color: "#B4BECC" }}>Welcome to my world</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "62px", color: "white" }}>
                Hii I'm{" "}
                <span style={{ color: "#FF014F" }}>Rahul Bharadia </span>{" "}
              </h1>
            </div>
            <div>
              <p style={{ color: "#B4BECC" }}>
                
                <span>HTML5 |</span> <span>CSS |</span>
                <span> Javascript |</span>
                <span> Bootstrap |</span>
                <span> React.js |</span>
                <span> React-Icon |</span>
                <span> GitHub </span>
              </p>
            </div>

            <div className="mt-4 pb-4">
              <Link
                to="/Resume/Rahul_Bharadia.pdf"
                target="_blank_"
                className="main-btn"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4  b21 ">
            <img
              src={rahul2}
              alt="Rahul_Bharadia"
              className=" homeimg img-fluid"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
