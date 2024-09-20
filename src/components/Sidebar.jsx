import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbTransactionDollar } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const sidebar = [
  {
    icon: <BiSolidDashboard />,
    text: "Dashboard",
    path: "/",
  },
  {
    icon: <FaUsers />,
    text: "Clients",
    path: "/clients",
  },
  {
    icon: <TbTransactionDollar />,
    text: "Transactions",
    path: "/transactions",
  },

  {
    icon: <IoMdSettings />,
    text: "Settings",
    path: "/settings/personal-information",
  },
];

const Sidebar = ({ isSidebar }) => {
  return (
    <aside
      className={`${
        isSidebar ? "translate-x-0" : "-translate-x-full"
      } w-64 z-40 transform md:translate-x-0 transition-transform duration-300 fixed top-[4.25rem] md:top-0 left-0 bg-main h-full overflow-y-auto md:fixed md:block`}
    >
      <div className="py-6 text-[#9e9e9e]">
        <Link to="/" className="ml-6 text-xl font-bold text-[#e5e7eb]">
          Windmill
        </Link>
        <ul className="mt-8">
          {sidebar.map((item, index) => (
            <li key={index} className="relative py-4">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center transition-colors duration-150 ${
                    isActive
                      ? "border-l-4 border-purple-600  text-white bg-opacity-100"
                      : "text-gray-400 pl-1 hover:text-white"
                  }`
                }
              >
                <span className="text-xl pl-5">{item.icon}</span>
                <span className="ml-4 font-semibold">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
