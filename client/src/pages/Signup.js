import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SignUpForm from '../components/SignUpForm';
import "./assets/styles/Signup.css";

function Signup() {

  return (
    <div className="h-100 w-100 signup-hero">
    <Container fluid className="h-100">
      <Row className="h-100 justify-content-center">
        {/* <Col xs={12} className="text-center my-5">
          
        </Col> */}
        <Col sm={6} lg={4} className=" my-auto">
        <h1 class="text-center mb-5">The Viral 2.0</h1>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Signup;

