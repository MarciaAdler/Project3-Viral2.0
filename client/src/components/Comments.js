import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Comments(props) {
  
  return (
    <div>

      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <h3>Comments Section</h3>
            <p style={{fontStyle: 'italic'}}>Comments.js</p>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default Comments;