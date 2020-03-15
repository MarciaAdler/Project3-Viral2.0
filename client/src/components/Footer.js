import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./assets/styles/Footer.css";

function Footer(props) {
  
  return (
    <div>
      <Container fluid className="border-top py-5">
            <Row className="py-5">
                <Col className="text-center">
                    The Viral 2.0
                </Col>
            </Row>
      </Container>
    </div>
    );
}

export default Footer;