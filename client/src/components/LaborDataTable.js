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

class LaborTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  // function LaborDataTable({ employees, wages }) {
  // const inputEl = useRef();
  // const onButtonClick = event => {
  //   event.preventDefault();
  //   console.log(event);
  //   let percent = inputEl.current.value;
  //   console.log(percent);
  // };
  render() {
    const { wages, employees } = this.props;
    console.log(employees);
    return (
      <div>
        <Accordion>
          {employees.length
            ? employees.map((employee, index) => {
                return (
                  <Card key={employee.id}>
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
                          ((!wages[index].averageWage
                            ? 28 / 1000000
                            : wages[index].averageWage / 1000000) *
                            40 *
                            52)}{" "}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        <form onSubmit={this.handleSubmit}>
                          User Assumption:{" "}
                          <input
                            value={this.state.value}
                            onChange={this.handleChange}
                            type=""
                            placeholder="%"
                            data-value={index}
                          />
                        </form>
                        {""}
                        Post Covid-19 Wages:{" "}
                        {employee.employees *
                          (100 - this.state.value) *
                          (!wages[index].averageWage
                            ? 28 / 1000000
                            : wages[index].averageWage / 1000000) *
                          40 *
                          52}
                        {""}
                        Hit to Economy(total wages/US GDP):
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
}

export default LaborTable;
