import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./assets/styles/Footer.css";
import Logo from "../pages/assets/img/viral-effect-color.png";
import LogoStacked from "../pages/assets/img/viral-effect-color-stacked.png";

function Footer(props) {
  
  return (
    <div>
      <Container fluid className="py-5 footer">
            <Row className="py-5">
                <Col className="text-center">
                    <img src={Logo} alt="The Viral Effect" style={{width: "250px"}} className="d-none d-lg-inline-block" />
                    <img src={LogoStacked} alt="The Viral Effect" style={{width: "250px"}} className="d-inline-block d-lg-none" />
                </Col>
            </Row>
      </Container>
    </div>
    );
}

export default Footer;