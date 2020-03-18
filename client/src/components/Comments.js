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
        <Row className="py-5 border-bottom justify-content-center">
          <Col className="py-5" md={10} lg={8} xl={6}>
            <CommentsForm
              saveComment={saveComment}
              handleInputChange={handleInputChange}
            ></CommentsForm>
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
