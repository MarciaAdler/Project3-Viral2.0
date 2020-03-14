import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './assets/styles/LoginLayout.css';

function LoginLayout(props) {
  
  return (
      <div className="h-100 w-100">
          <Container fluid className="h-100 w-100 login-hero">
                <Row className="h-100 justify-content-center">
                    <Col md={"auto"} className="mt-5 my-md-auto text-center text-md-right">
                        <h1>The Viral 2.0</h1>
                        Tagline
                    </Col>
                    <Col xs={"auto"} className="mt-3 my-md-auto">
                    <Form className="border-left ml-md-3 pl-md-5 py-3 text-center">
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
                        <p className="mt-4 mb-0">Don't have an account? <a href="#">Sign up</a></p>
                        </Form>
                    </Col>
                </Row>
      </Container>

      <Container className="py-md-5 px-4">
            <Row className="py-5 border-bottom">
              <Col md={"auto"} className="ml-md-4 ml-lg-5">
                <img src="https://via.placeholder.com/150x150?text=Image" />
              </Col>
              <Col className="mr-md-4 mr-lg-5">
               <h3>Headline</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
               <p className="mb-0"><a href="#">Sign up for an account</a></p>
              </Col>
            </Row>
            <Row className="py-5 border-bottom">
                <Col className="ml-md-4 ml-lg-5 order-last order-md-first">
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                <p className="mb-0"><a href="#">Sign up for an account</a></p>
                </Col>
                <Col md={"auto"} className="mr-md-4 mr-lg-5 order-first order-md-last">
                    <img src="https://via.placeholder.com/150x150?text=Image" />
                </Col>
            </Row>
            <Row className="py-5">
                <Col md={"auto"} className="ml-md-4 ml-lg-5">
                    <img src="https://via.placeholder.com/150x150?text=Image" />
                </Col>
                <Col className="mr-md-4 mr-lg-5">
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                <p className="mb-0"><a href="#">Sign up for an account</a></p>
                </Col>
            </Row>
      </Container>
      </div>
  );
}

export default LoginLayout;