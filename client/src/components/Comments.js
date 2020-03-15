import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentsForm from "./CommentsForm";
import ViewComments from "./ViewComments";
import api from "../utils/api";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [formObject, setFormObject] = useState({});
  useEffect(() => {
    loadComments();
  }, []);
  async function loadComments() {
    const { data } = await api.getComments();

    return setComments(data);
  }
  function saveComment(event) {
    event.preventDefault();

    api
      .saveComment({
        comment: formObject.comment,
        username: formObject.username
      })
      .then(res => {
        loadComments();
      })
      .catch(err => console.log(err));
    document.getElementById("commentForm.ControlInput1").value = "";
    document.getElementById("commentForm.ControlTextarea1").value = "";
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value });
  }
  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="py-5">
            <CommentsForm
              saveComment={saveComment}
              handleInputChange={handleInputChange}
            ></CommentsForm>
            {comments
              ? comments.map(comment => (
                  <ViewComments
                    key={comment.id}
                    comment={comment.comment}
                    username={comment.username}
                    date={comment.createdAt}
                  ></ViewComments>
                ))
              : "no comments found"}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
