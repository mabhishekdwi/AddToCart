import React from "react";

import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,  Nav,  NavDropdown,  Form,  FormControl,  Button,  Container,} from "react-bootstrap";
 

import About from "./pages/About"
import Account from "./pages/Account";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Goats from "./pages/Goats";

import Products from "./pages/Products";
import Sheeps from "./pages/Sheeps";
import Productdetails from "./pages/product-details";

const navbar = () => {
  return (
     <div>
            <Navbar className="navbar-nav mr-auto" >
              <Container  className="navbar-nav mr-auto" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link to="/About">About</Nav.Link>
                    <Nav.Link to="/Account">Account</Nav.Link>
                    
                        
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    
      </div>
  
  );
};
export default navbar;
