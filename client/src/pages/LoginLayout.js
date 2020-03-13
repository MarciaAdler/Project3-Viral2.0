import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginLayout(props) {
  
  return (
      <div>
      <Container>
          <Row>
              <Col md={6}>
                Logo <br/>
                Tagline
              </Col>
              <Col md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
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
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis. Quisque sollicitudin et leo ut euismod. Etiam ac metus at arcu tincidunt gravida. Aliquam fermentum erat ut congue accumsan. Praesent at erat diam. Sed vitae varius nibh. In eu nisi eu nulla pulvinar lacinia. Vivamus sed rhoncus eros, vel varius lorem.</p>
              </Col>
            </Row>
            <Row>
                <Col md={6}>
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis. Quisque sollicitudin et leo ut euismod. Etiam ac metus at arcu tincidunt gravida. Aliquam fermentum erat ut congue accumsan. Praesent at erat diam. Sed vitae varius nibh. In eu nisi eu nulla pulvinar lacinia. Vivamus sed rhoncus eros, vel varius lorem.e</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis. Quisque sollicitudin et leo ut euismod. Etiam ac metus at arcu tincidunt gravida. Aliquam fermentum erat ut congue accumsan. Praesent at erat diam. Sed vitae varius nibh. In eu nisi eu nulla pulvinar lacinia. Vivamus sed rhoncus eros, vel varius lorem.</p>
                </Col>
            </Row>
      </Container>
      </div>
  );
}

export default LoginLayout;