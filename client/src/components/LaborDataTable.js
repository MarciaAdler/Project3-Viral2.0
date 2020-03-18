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
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { wages, employees } = this.props;
    console.log(employees);
    let preCovidWages = employees.map((employee, index) => {
      return (
        employee.employees *
        ((!wages[index].averageWage
          ? 28 / 1000000
          : wages[index].averageWage / 1000000) *
          40 *
          52)
      );
    });

    let postCovidWages = employees.map((employee, index) => {
      return (
        (1 - this.state.value / 100) *
        employee.employees *
        (!wages[index].averageWage
          ? 28 / 1000000
          : wages[index].averageWage / 1000000) *
        40 *
        52
      );
    });

    return (
      <div>
        <h2>Industry Calculator</h2>
        <p>
          For anticipated % industry impact, input an assumption of % job
          decrease to see the impact on industry wages. <br />
          <small>
            For example, putting in 10% will reduce pre-covid wages by 10%.
          </small>
        </p>
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
                        <strong>{employee.industry}: </strong>
                        <br /> Employees(1000s): {employee.employees}
                        <br />
                        {""} Hourly Wages:{" $"}
                        {!wages[index].averageWage
                          ? 28
                          : wages[index].averageWage}{" "}
                        <br />
                        Pre Covid-19 Wages: {" $"}
                        {Math.round(preCovidWages[index])}
                        {"(mil)"}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        <form onSubmit={this.handleSubmit}>
                          Anticipated % industry impact:{" "}
                          <input
                            value={this.state.value}
                            onChange={this.handleChange}
                            type=""
                            placeholder="%"
                            data-value={index}
                          />
                        </form>{" "}
                        Post Covid-19 Wages: {" $"}
                        {Math.round(postCovidWages[index])}
                        {"(mil)"}
                        <br /> Hit to Economy(total wages/US GDP):
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
