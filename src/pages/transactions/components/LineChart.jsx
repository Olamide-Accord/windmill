import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 200, 150, 220, 300, 250],
        borderColor: "#7e3af2",
        backgroundColor: "#7e3af2",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [180, 170, 130, 210, 260, 300],
        borderColor: "#14b8a6",
        backgroundColor: "#14b8a6",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        layouts: {
          margin: 10,
        },
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full my-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
