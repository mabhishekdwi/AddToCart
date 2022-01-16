import React from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <Navbar className="navbar-nav mr-auto">
        <Container className="navbar-nav mr-auto">
          <Navbar.Brand as={Link} to="/">Brand Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default navbar;
