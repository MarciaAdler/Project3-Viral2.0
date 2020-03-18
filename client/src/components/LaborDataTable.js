import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function LaborDataTable({ employees, wages }) {
  console.log(employees.length);
  return (
    <div>
      <Table>
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
      </Table>
    </div>
  );
}

export default LaborDataTable;
