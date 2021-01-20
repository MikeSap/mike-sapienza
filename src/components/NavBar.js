import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../assets/logo.png"

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" 
    sticky="top"
     variant="dark" bg="dark">
      <Navbar.Brand href="/">
        <img src={logo} alt="Mike Sapienza Logo" className="ml-auto" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav navbar variant="pill">
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/resume">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
