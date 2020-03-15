import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(props) {
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">The Viral 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-right">
          <Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Navbar.Text className="small my-auto">Currently Viewing:</Navbar.Text>
            <NavDropdown alignRight title="Main Page Overview" id="basic-nav-dropdown">
              <NavDropdown.Item href="#industry1">Industry 1</NavDropdown.Item>
              <NavDropdown.Item href="#industry2">Industry 2</NavDropdown.Item>
              <NavDropdown.Item href="#industry3">Industry 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#industry4">Industry 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#logout">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
}

export default Header;