import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";
import CoronaChart from "./CoronaChart";

function CovidInfo(props) {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    loadCases();
  }, []);

  function loadCases() {
    api
      .getCases()
      .then(res => {
        setCases(res.data);
      })

      .catch(err => console.log(err));
  }

  return (
    <div>
      {/* <CovidInfo /> */}
      <Container fluid>
        <Row className="py-md-5 border-bottom">
          <Col className="text-center py-md-5">
            <h2>US Covid-19 Cases</h2>
            <CoronaChart cases={cases} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CovidInfo;
