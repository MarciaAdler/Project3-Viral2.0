import { Line } from "react-chartjs-2";
import React from "react";

export default function MarketChart({ stocks }) {
  const dates = stocks.reverse().map(stock => {
    return stock.date;
  });
  const closing = stocks.map(stock => {
    return stock.close;
  });
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Consumer Discretionary fund ETF closing price",
        data: closing,
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
}
