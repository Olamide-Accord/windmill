import React from "react";
import { BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { FaSortAmountUp } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";

const DashCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-200 mb-7">
      <div className="bg-main rounded-xl flex items-center col-span-1 justify-between shadow p-6">
        <div>
          <p className="mb-2 text-sm">Spent this month</p>
          <h4 className="font-bold text-2xl text-purple 700">$3,652.72</h4>
        </div>
        <div className="text-4xl text-primary">
          <BsGraphUp />
        </div>
      </div>
      <div className="bg-main rounded-xl flex items-center col-span-1 justify-between shadow p-6">
        <div className="flex gap-3.5">
          <div className="bg-primary text-white text-center rounded-full shrink-0 w-14 h-14 flex items-center justify-center text-3xl">
            <MdPeopleAlt />
          </div>
          <div>
            <p className="mb-1 text-sm">New Clients</p>
            <h4 className="font-bold text-2xl text-purple 700">652</h4>
          </div>
        </div>
        <div className="text-4xl">
          <FaSortAmountUp />
        </div>
      </div>
      <div className="bg-main rounded-xl flex items-center col-span-1 justify-between shadow p-6">
        <div className="flex gap-3.5">
          <div className="text-primary bg-white text-center rounded-full shrink-0 w-14 h-14 flex items-center justify-center text-3xl">
            <BsBarChartFill />
          </div>
          <div>
            <p className="mb-1 text-sm">Earnings</p>
            <h4 className="font-bold text-2xl text-purple 700">$86,230.82</h4>
          </div>
        </div>
      </div>
      <div className="bg-primary rounded-xl flex items-center col-span-1 justify-between shadow p-6">
        <div>
          <p className="mb-2 text-sm">Activity</p>
          <h4 className="font-bold text-2xl text-purple 700">$652.48</h4>
        </div>
        <div className="text-4xl text-white">
          <FiActivity />
        </div>
      </div>
    </div>
  );
};

export default DashCard;
