import React from "react";
import charles from "../../../assets/charles.jpg";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SlLocationPin } from "react-icons/sl";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const DataOverview = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 45,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 my-8">
      <div className="bg-main col-span-1 lg:col-span-3 p-5  rounded-xl shadow-sm text-gray-400">
        <h2 className="font-semibold text-xl mb-3">Data Overview</h2>

        <div className="w-full h-full mt-6">
          <Bar
            data={{
              labels: ["", "", "", "", "", "", "", "", ""],
              datasets: [
                {
                  data: [22, 40, 40, 30, 18, 28, 21, 34, 20],
                  backgroundColor: ["#7e3af2"],
                  barThickness: 30,
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>

      <div className="bg-main col-span-1 lg:col-span-2 p-8 rounded-xl shadow-sm text-gray-400">
        <div className="flex items-center justify-center">
          <div className="w-full xs:w-10/12 mx-auto">
            <div className="w-40 mx-auto md:w-48 h-40 md:h-48">
              <img
                src={charles}
                alt="charles"
                className="w-full h-full rounded-full object-center"
              />
            </div>
            <div className="text-center my-5">
              <h4 className="font-semibold text-2xl sm:text-3xl text-purple-700 mb-1.5">
                Charles Robbie
              </h4>
              <p className="flex items-center justify-center gap-2.5 text-gray-300 text-sm font-light">
                <span>
                  <SlLocationPin />
                </span>
                <span>New York, USA</span>
              </p>
            </div>
            <div className="flex pt-3 justify-between">
              <div className="text-center">
                <p className="font-light text-sm text-gray-200 mb-1">
                  Projects
                </p>
                <h5 className="font-bold text-2xl text-gray-500">28</h5>
              </div>
              <div className="text-center">
                <p className="font-light text-sm text-gray-200 mb-1">
                  Followers
                </p>
                <h5 className="font-bold text-2xl text-gray-500">643</h5>
              </div>
              <div className="text-center">
                <p className="font-light text-sm text-gray-200 mb-1">
                  Following
                </p>
                <h5 className="font-bold text-2xl text-gray-500">50</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;
