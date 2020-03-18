import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";
import LaborDataTable from "./LaborDataTable";

function Labor(props) {
  const [employees, setEmployees] = useState([]);
  const [wages, setWages] = useState([]);

  const industries = [
    "Retail trade",
    "Food services and drinking places",
    "Leisure and hospitality",
    "Health care",
    "Professional and technical services"
  ];
  useEffect(() => {
    loadEmployees();
    console.log(employees);
    loadWages();
  }, []);

  async function loadEmployees() {
    const ind = [];
    for (let i = 0; i < industries.length; i++) {
      const industry = industries[i];
      const { data } = await api.getEmployees(industry);

      ind.push(data);
    }
    console.log(ind);
    setEmployees(ind);
  }

  function loadWages() {
    const ind = [];
    for (let i = 0; i < industries.length; i++) {
      const industry = industries[i];
      api
        .getWages(industry)
        .then(res => {
          return ind.push(res.data[0]);
        })

        .catch(err => console.log(err));
    }
    setWages(ind);
  }

  return (
    <div>
      <Container fluid>
        <Row className="py-5 border-bottom">
          <Col className="text-center py-5">
            <LaborDataTable employees={employees} wages={wages} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Labor;
