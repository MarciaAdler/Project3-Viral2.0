import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../pages/assets/img/viral-effect-color.png";

function Header(props) {
  
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="md" className="justify-content-between">
        <Navbar.Brand>
          <Nav.Link href="/home"><img src={Logo} alt="The Viral Effect" style={{width: "250px"}} /></Nav.Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-right">
          <Nav>
            <Nav.Link href="/home">Overview</Nav.Link>
            <Nav.Link href="/industries">Industries</Nav.Link>
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
}

export default Header;