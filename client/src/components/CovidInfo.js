import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";
// import CoronaChart from "./CoronaChart";

function CovidInfo(props) {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    loadCases();
  }, []);

  function loadCases() {
    api
      .getCases()
      .then(res => {
        console.log(res.data);
        setCases(res.data);
      })

      .catch(err => console.log(err));
  }

  return (
    <div>
      {/* <CovidInfo /> */}
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            {/* <CoronaChart cases={cases} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CovidInfo;
