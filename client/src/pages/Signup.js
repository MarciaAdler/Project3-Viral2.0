import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SignUpForm from '../components/Signup';

function Signup() {

  return (
    <Container>
      <Row>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;

