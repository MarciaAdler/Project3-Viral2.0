import React from "react";
import { Line } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";

function CoronaChart({ cases }) {
  console.log(cases);
  let totalDayNumber = 0;
  const days = [];

  const numbers = [];
  for (let i = 0; i < cases.length; i++) {
    const day = cases[i].caseDay;

    if (days.indexOf(day) !== -1) {
    } else {
      days.push(day);
    }
  }
  console.log(days);
  for (let j = 0; j < days.length; j++) {
    const caseDay = days[j];

    for (let i = 0; i < cases.length; i++) {
      const number = cases[i].cases;

      if (cases[i].caseDay === caseDay) {
        totalDayNumber = totalDayNumber + number;
      }
    }
    numbers.push(totalDayNumber);
  }
  console.log(numbers);
  // for (let i = 0; i < days.length; i++) {
  //   let totalNumber = 0;
  //   const virus = cases[i].caseDay;
  //   const stateCase = cases[i].cases;
  //   const day = days[i];

  //   for (let j = 0; j < cases.length; j++) {
  //     if (days === virus) {
  //       for (let i = 0; i < days.length; i++) {
  //         totalNumber = stateCase + totalNumber;
  //         numbers.push(totalNumber);
  //       }
  //     }
  //   }
  // }

  const data = {
    labels: days,
    datasets: [
      {
        label: "# of Cases in US",
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
  };
  return (
    <div>
      <Line
        data={data}
        width={100}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
  // return <div></div>;
}

export default CoronaChart;
