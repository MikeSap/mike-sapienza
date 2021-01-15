import React from "react";

import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="/">
        Mike Sapienza
        {/* <img src="" alt="Mike Sapienza Logo" className="ml-auto" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link className="ml-auto" href="/projects">
          Projects
        </Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/about">About Me</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
