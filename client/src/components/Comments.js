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
    let { data } = await api.getComments();
    data = data.reverse();
    document.getElementById("comment-loading").classList.add("d-none");
    return setComments(data);
  }

  function saveComment(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("commentForm.ControlInput1");
    const commentInput = document.getElementById(
      "commentForm.ControlTextarea1"
    );

    if (usernameInput.value === "") {
      usernameInput.focus();
      return;
    } else if (commentInput.value === "") {
      commentInput.focus();
      return;
    }
    api
      .saveComment({
        comment: formObject.comment,
        username: formObject.username
      })
      .then(res => {
        loadComments();
      })
      .catch(err => console.log(err));

    usernameInput.value = "";
    commentInput.value = "";
    document.getElementById("comment-loading").classList.remove("d-none");
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value });
  }
  return (
    <div>
      <Container fluid>
        <Row className="py-md-5 border-bottom justify-content-center">
          <Col className="py-md-5" md={10} lg={8} xl={6}>
            <h2>Comments</h2>
            <CommentsForm
              saveComment={saveComment}
              handleInputChange={handleInputChange}
            ></CommentsForm>

            <div id="comment-loading" className="text-center d-none">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="mt-3">
                <span className="my-auto">Your comment is being posted...</span>
              </div>
            </div>

            {comments
              ? comments.map(comment => (
                  <ViewComments
                    key={comment.id}
                    image={comment.image}
                    comment={comment.comment}
                    username={comment.username}
                    date={comment.createdAt}
                  ></ViewComments>
                ))
              : "Add your comment above!"}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
