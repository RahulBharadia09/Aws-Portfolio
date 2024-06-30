import React from "react";
import rahul2 from "../Images/WhatsApp Image 2023-07-29 at 5.01.56 PM.jpeg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


const Home = () => {
  return (
    <div className="bg2 py-10 ">
      <Container>
        <div className="row justify-content-center align-items-center section">
          <div className="col-12  col-lg-8 text-center">
            <div className="mlll " >
              <h1 style={{ fontSize: "62px", color: "white" }}>
                <span className="word" >Hii I'm</span>
                 <span className="word"   style={{ color: "#FF014F" }}> Rahul Bharadia </span>
              </h1>
            </div>
            <div>
              <p style={{ color: "#B4BECC" }}>
                <span>ReactJs |</span>
                <span> Python |</span>
                <span> Django |</span>
                <span> AWS |</span>
                <span> Rest Api |</span>
                <span> Javascript |</span>
                <span> Tailwind |</span>
                <span> SQL |</span>
                <span> GitHub |</span>
                <span> Docker |</span>
                <span> Jenkins |</span>
                <span> Figma </span>
              </p>
            </div>

            <div className="mt-4 pb-4">
              <Link
                to="/Resume/Rahul Bharadia Resume.pdf"
                target="_blank_"
                className="main-btn"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div  className="col-sm-12 col-lg-4  b21 ">
            <img
              src={rahul2}
              alt="Rahul_Bharadia"
              className=" homeimg img-fluid "
              width="100%"
              height="100%"
            />
          </div>
          <About />
          <Projects />
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default Home;
