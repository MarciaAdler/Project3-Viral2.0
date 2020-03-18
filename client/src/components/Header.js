import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import "./assets/styles/Header.css";

function Header(props) {
  
  return (
    <div>
      <Navbar bg="light" expand="md" className="justify-content-between">
        <Navbar.Brand>
          <Nav.Link href="/home">The Viral Effect</Nav.Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-right">
          <Nav>
            <Nav.Link href="/home">Overview</Nav.Link>
            <Nav.Link href="/industries">Industries</Nav.Link>
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Nav id="basic-navbar-nav">
        <Nav.Link href="/">Log out</Nav.Link>
        </Nav> */}
      </Navbar>
    </div>
    );
}

export default Header;