import React from "react";
import { Line } from "chart.js";
import { Container, Row, Col } from "react-bootstrap";


function CoronaChart({ cases }) {
  const days = cases.map(case => {
    return case.day;
  });
  const numbers = cases.map(case => {
    return case.number;
  });
  const data = {
    labels: days,
    datasets: [
      {
        label: "# of Votes",
        data: numbers,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  }
  return (<div><Line
  data={data}
  width={100}
  height={300}
  options={{ maintainAspectRatio: false }}
/></div>)
}

export default CoronaChart;
