import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Accordion,
  Button
} from "react-bootstrap";

function LaborDataTable({ employees, wages }) {
  const inputEl = useRef(null);
  const onButtonClick = event => {
    event.preventDefault();
    let percent = inputEl.current.value;
    console.log(percent);
  };
  return (
    <div>
      {/* <Table>
        <thead>
          <tr>
            <th>Industry Segment</th>
            <th>Employees(1000s)</th>
            <th>Hourly Wages</th>
            <th>Pre Covid-19 Wages</th>
            <th>User Assumption(input)</th>
            <th>Post Covid-19 Wages</th>
            <th>Hit to Economy(total wages/us GDP)</th>
          </tr>
        </thead>
        <tbody>
          {employees.length
            ? employees.map((employee, index) => {
                console.log(wages);
                return (
                  <tr key={index}>
                    <td>{employee.industry}</td>
                    <td>{employee.employees}</td>
                    <td>
                      {!wages[index].averageWage
                        ? 28
                        : wages[index].averageWage}
                    </td>
                    <td>
                      {employee.employees *
                        (!wages[index].averageWage
                          ? 28
                          : wages[index].averageWage) *
                        40 *
                        52}
                    </td>
                    <td>
                      <input placeholder="%"></input>
                    </td>
                  </tr>
                );
              })
            : "no data found"}
        </tbody>
      </Table> */}

      <Accordion defaultActiveKey="0">
        {employees.length
          ? employees.map((employee, index) => {
              return (
                <Card key={index}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index}
                    >
                      <strong>{employee.industry}: </strong> Employees(1000s):
                      {employee.employees}
                      {""} Hourly Wages:
                      {!wages[index].averageWage
                        ? 28
                        : wages[index].averageWage}{" "}
                      Pre Covide-19 Wages:
                      {employee.employees *
                        (!wages[index].averageWage
                          ? 28
                          : wages[index].averageWage) *
                        40 *
                        52}{" "}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      User Assumption:{" "}
                      <input ref={inputEl} type="text" placeholder="%" />
                      <button onClick={onButtonClick}>Input</button>
                      {""}
                      Post Covid-19 Wages: Hit to Economy(total wages/US GDP):
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
          : "no data found"}
      </Accordion>
    </div>
  );
}

export default LaborDataTable;
