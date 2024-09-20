import React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const sidetab = [
  {
    link: "/settings/personal-information",
    icon: <LuUserCog />,
    title: "Personal Information",
  },
  {
    link: "/settings/bank-information",
    icon: <SlBriefcase />,
    title: "Bank Information",
  },
  {
    link: "/settings/password-details",
    icon: <GrShieldSecurity />,
    title: "Password Details",
  },
];

const SettingsTab = () => {
  return (
    <>
      <div className="p-4 rounded-xl text-gray-400 bg-main hidden md:flex flex-col gap-2 w-72">
        {sidetab.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isPending, isActive }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-purple-900 text-white flex items-center gap-3 p-2.5 rounded-md "
                : "flex items-center gap-3 p-2.5 rounded-md hover:bg-purple-900 hover:text-white active:bg-purple-900 duration-150"
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </div>
      <div className="md:hidden w-full bg-main p-3.5">
        <div className="flex flex-wrap w-full xs:flex-row gap-y-5 gap-x-4">
          {sidetab.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-purple-900 text-white flex items-center gap-3 p-2.5 rounded-md"
                  : "flex items-center gap-3 p-2.5 rounded-md hover:bg-purple-900 hover:text-white active:bg-purple-900 duration-150 text-gray-200"
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SettingsTab;
