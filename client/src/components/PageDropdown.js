import React from "react";
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

function PageDropdown(props) {
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <Dropdown>
              <Dropdown.Toggle variant="none" size="lg" className="btn-block text-left rounded-0 border-bottom">
                Main Markets Page
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#industry1">Industry 1</Dropdown.Item>
                <Dropdown.Item href="#industry2">Industry 2</Dropdown.Item>
                <Dropdown.Item href="#industry3">Industry 3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#industry4">Industry 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default PageDropdown;