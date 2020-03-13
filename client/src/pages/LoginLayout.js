import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './assets/styles/LoginLayout.css';

function LoginLayout(props) {
  
  return (
      <div className="h-100 w-100">
          <Container fluid className="h-100 w-100 home-hero">
                <Row className="h-100 justify-content-center">
                    <Col md={4} lg={3} className="my-auto text-md-right">
                        <h1>The Viral 2.0</h1>
                        Tagline
                    </Col>
                    <Col md={5} lg={4} className="my-auto">
                    <Form className="border-left ml-3 pl-5 py-3 text-center">
                        <h3 className="mb-4">Login to your account</h3>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="outline-light" size="lg" className="mx-auto d-block mt-3" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
      </Container>

      <Container>
            <Row>
              <Col md={6}>
                Img
              </Col>
              <Col md={6}>
               <h3>Headline</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
              </Col>
            </Row>
            <Row>
                <Col md={6}>
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                </Col>
                <Col md={6}>
                    Img
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    Img
                </Col>
                <Col md={6}>
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                </Col>
            </Row>
      </Container>
      </div>
  );
}

export default LoginLayout;