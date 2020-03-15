import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentsForm from "./CommentsForm";
import ViewComments from "./ViewComments";

function Comments(props) {
  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <CommentsForm />
            <ViewComments />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
