import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Sign_img from "./Sign_img";

const Header = () => {

  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark" class="navbar">
      <Container>
        <Navbar.Brand className="fs-6" href="#home"> <NavLink to="/home"><img src="./signupp.png" style={{ maxWidth: 80 }}/></NavLink></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    
  );
};

export default Header;
