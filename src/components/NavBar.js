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
        <Nav navbar fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="ml-auto" href="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/resume">
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" href="/about">
              About Me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
