import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function CovidInfo(props) {
  
  return (
    <div>
      {/* <CovidInfo /> */}
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <h3>Coronavirus Information</h3>
            <p style={{fontStyle: 'italic'}}>CovidInfo.js</p>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default CovidInfo;