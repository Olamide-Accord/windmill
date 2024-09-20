import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Shoes", "Clothing", "Accessories"],
    datasets: [
      {
        label: "Expenses($)",
        data: [900, 1200, 508],
        backgroundColor: ["#2563eb", "#14b8a6", "#7e3af2"],
        hoverBackgroundColor: ["#2563eb", "#14b8a6", "#7e3af2"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",

          margin: 10,
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
    },
  };

  return (
    <div className="w-11/12 xs:w-10/12 sm:w-9/12 lg:w-1/2 mx-auto my-4">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
