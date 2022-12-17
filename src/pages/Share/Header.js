import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4 text-white text-decoration-none"
        style={{ backgroundColor: "rgb(14, 14, 14)" }}
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="">
            <Link to="/">
              <img src="https://quadbtech.com/images/QBT%20Logo.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="#pricing">Register</Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSidebar></LeftSidebar>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
