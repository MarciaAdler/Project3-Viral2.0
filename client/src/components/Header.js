import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../pages/assets/img/viral-effect-color.png";
import LogoStacked from "../pages/assets/img/viral-effect-color-stacked.png";

function Header(props) {
  
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="md" className="justify-content-between py-0 py-sm-2">
        <Navbar.Brand>
          <Nav.Link href="/home">
            <img src={Logo} alt="The Viral Effect" className="d-none d-sm-inline" style={{width: "250px"}} />
            <img src={LogoStacked} alt="The Viral Effect" className="d-inline d-sm-none" style={{width: "120px"}} />
            </Nav.Link>
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