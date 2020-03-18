import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ViewComments(props) {
  return (
    <Container className="my-3 pt-4 border-top">
      <Row>
        <Col>
          <h4>{props.username}</h4>
          <p>{props.date}</p>
          <p>{props.comment}</p>
        </Col>
      </Row>
    </Container>
  );
}
