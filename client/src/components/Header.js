import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import "./assets/styles/Header.css";

function Header(props) {
  
  return (
    <div>
      <Navbar  fixed="top"  bg="light" expand="md" className="justify-content-between">
        <Navbar.Brand href="#home">The Viral 2.0</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-right">
          <Nav>
            <Navbar.Text className="small my-auto d-none d-md-inline-block">Currently Viewing:</Navbar.Text>
            <NavDropdown alignRight title="Main Page Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="#industry1">Industry 1</NavDropdown.Item>
              <NavDropdown.Item href="#industry2">Industry 2</NavDropdown.Item>
              <NavDropdown.Item href="#industry3">Industry 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#industry4">Industry 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#logout">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Nav id="basic-navbar-nav">
        <Nav.Link href="/">Log out</Nav.Link>
        </Nav>
      </Navbar>
    </div>
    );
}

export default Header;