import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../pages/assets/img/blank-profile-picture-973460_640.png";

export default function ViewComments(props) {
  return (
    <Container id={'comment-' + props.id} className="my-3 pt-4 border-top">
      <Row>
        <Col className="col-auto">
          <img src={props.image ? props.image : image} alt={props.username} style={{width: "100px", borderRadius: "50%"}} />
        </Col>
        <Col>
          <h4>{props.username}</h4>
          <p>{props.date}</p>
          <p>{props.comment}</p>
        </Col>
      </Row>
    </Container>
  );
}
