import React from "react";

export default function Comment() {
  return (
    <div>
      <Form>
        <Form.Group controlId="commentForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="commentForm.ControlTextarea1">
          <Form.Label>Comment textarea</Form.Label>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
