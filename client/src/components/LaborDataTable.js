import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function LaborDataTable(props) {
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
          <tr>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td>{!props.wages ? 28 : props.wages}</td>
            <td>{props.count * (!props.wages ? 28 : props.wages) * 40 * 52}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default LaborDataTable;
