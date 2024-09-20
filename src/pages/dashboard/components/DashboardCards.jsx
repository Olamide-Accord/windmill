import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { PiCards } from "react-icons/pi";

const cardInfo = [
  {
    icon: () => (
      <div className="bg-orange-500 bg-opacity-100 text-opacity-100 text-orange-100 p-3 rounded-full mr-4">
        <span className="text-xl">
          <FaUsers />
        </span>
      </div>
    ),
    header: "Total Clients",
    text: "6389",
  },
  {
    icon: () => (
      <div className="bg-green-500 bg-opacity-100 text-opacity-100 text-green-100 p-3 rounded-full mr-4">
        <span className="text-xl">
          <PiCards />
        </span>
      </div>
    ),
    header: "Account Balance",
    text: "$ 46,700.89",
  },
  {
    icon: () => (
      <div className="bg-blue-500 bg-opacity-100 text-opacity-100 text-blue-100 p-3 rounded-full mr-4">
        <span className="text-xl">
          <BsCartFill />
        </span>
      </div>
    ),
    header: "New Sales",
    text: "356",
  },
  {
    icon: () => (
      <div className="bg-teal-500 bg-opacity-100 text-opacity-100 text-teal-100 p-3 rounded-full mr-4">
        <span className="text-xl">
          <BiMessageDots />
        </span>
      </div>
    ),
    header: "Pending Contacts",
    text: "39",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid cols-1 mt-4 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cardInfo.map((item, index) => (
        <div
          className="p-4 flex items-center bg-main rounded-lg shadow-xs"
          key={index}
        >
          {item.icon()}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-400">
              {item.header}
            </p>
            <p className="text-xl text-gray-200 text-opacity-100 font-semibold">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
