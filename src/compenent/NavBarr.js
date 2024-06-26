import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBarr = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expanded={expanded}
      className="navbarcolor"
      expand="md"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-uppercase ">
            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              className=" mx-4 navlink1"
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              className=" mx-4 navlink1"
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              className=" mx-4 navlink1"
              to="/project"
            >
              Projects
            </Nav.Link>

            <Nav.Link
              onClick={() => setExpanded(false)}
              as={Link}
              className=" mx-4 navlink1"
              to="/contact"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarr;