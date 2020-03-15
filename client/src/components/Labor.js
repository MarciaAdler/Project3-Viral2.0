import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Labor(props) {
  
  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <h3>Labor Statistics</h3>
            <p style={{fontStyle: 'italic'}}>Labor.js</p>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default Labor;