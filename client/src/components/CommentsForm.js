import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CommentsForm(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId="commentForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={props.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="commentForm.ControlTextarea1">
          <Form.Label>Write Comment Here</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            placeholder="Type Comment"
            rows="5"
            onChange={props.handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={props.saveComment}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
