import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";
import LaborDataTable from "./LaborDataTable";

function Labor(props) {
  const [employees, setEmployees] = useState([]);
  const [wages, setWages] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadWages();
  }, []);
  function loadEmployees() {
    api
      .getEmployees()
      .then(res => {
        console.log(res);
        setEmployees(res.data);
      })

      .catch(err => console.log(err));
  }

  function loadWages() {
    api
      .getWages()
      .then(res => {
        console.log(res);
        setWages(res.data);
      })

      .catch(err => console.log(err));
  }
  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <LaborDataTable
              name={employees.industry}
              count={employees.employees}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Labor;
