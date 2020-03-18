import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './assets/styles/LoginLayout.css';
import LoginForm from "../components/LoginForm";
import Logo from "./assets/img/viral-effect-white.png";


function LoginLayout(props) {
  
  return (
      <div className="h-100 w-100">
          <Container fluid className="h-100 w-100 login-hero">
                <Row className="h-100 justify-content-center">
                    <Col md={"auto"} className="mt-5 my-md-auto text-center text-md-right d-none d-lg-block fade-in">
                        <img src={Logo} alt="The Viral Effect" className="d-block" style={{width: "500px"}} />
                        <p className="mt-3 login-tagline">Check the symptoms of the economy</p>
                    </Col>
                    <Col xs={"auto"} className="mt-3 my-auto">
                        
                        <LoginForm />
                    </Col>
                </Row>
      </Container>
      </div>
  );
}

export default LoginLayout;