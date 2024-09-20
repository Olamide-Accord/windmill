import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const TransactionCard = () => {
  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      <div className="bg-main text-gray-200 col-span-1 lg:col-span-2 p-5 rounded-xl shadow-md">
        <h4 className="font-semibold text-xl">Expense Tracker</h4>
        <PieChart />
      </div>
      <div className="bg-main text-gray-200 col-span-1 lg:col-span-2 p-5 rounded-xl shadow-md">
        <h2 className="font-semibold text-xl">
          Sales vs. Expenses (Jan - June)
        </h2>
        <LineChart />
      </div>
    </div>
  );
};

export default TransactionCard;
