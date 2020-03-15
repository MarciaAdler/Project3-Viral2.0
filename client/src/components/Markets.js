import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Markets(props) {
  
  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <h3>Graph/table markets over time</h3>
            <p style={{fontStyle: 'italic'}}>Markets.js</p>
          </Col>
        </Row>
      </Container>

    </div>
    );
}

export default Markets;