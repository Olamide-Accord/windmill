import React, { useEffect, useRef, useState } from "react";
import user from "../assets/user.png";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";

const Navbar = ({ toggleSidebar }) => {
  const [isProfile, setIsProfile] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const profileRef = useRef(null);
  const notifyRef = useRef(null);

  const toggleProfile = () => {
    setIsProfile(!isProfile);
    setIsNotify(false);
  };

  const toggleNotify = () => {
    setIsNotify(!isNotify);
    setIsProfile(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notifyRef.current &&
        !notifyRef.current.contains(event.target)
      ) {
        setIsProfile(false);
        setIsNotify(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-4 z-10 shadow-md bg-main fixed top-0 right-0 w-full">
      <div className="flex items-center justify-between h-full px-10 w-full mx-auto text-primaryLight">
        <button
          className="p-1 mr-5 text-xl -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-primaryLight"
          onClick={toggleSidebar}
        >
          <TbMenu2 />
        </button>

        <div className="flex items-center w-full justify-center flex-1 lg:mr-32">
          <div className="relative focus-within:text-[#9061f9] w-full max-w-xl mr-6">
            <span className="absolute inset-y-0 flex items-center pl-2">
              <IoSearch />
            </span>
            <input
              type="text"
              className="appearance-none w-full pl-8 pr-2 text-sm border-0 rounded-md placeholder-gray-500 focus:outline-[#e5e7eb] focus:placeholder-gray-600 bg-[#24262d] text-[#e5e7eb] focus:border-[#cabffd] focus:outline-none focus:shadow-outline-purple form-input py-2"
              placeholder="Search for projects"
            />
          </div>
        </div>

        <ul className="flex h-full items-center shrink-0 space-x-6">
          <li className="relative" ref={notifyRef}>
            <button className="text-lg" onClick={toggleNotify}>
              <FaBell />
              <span className="bg-red-600 w-2.5 h-2.5 rounded-full transform z-30 top-0 absolute right-0 translate-x-1 -translate-y-1"></span>
            </button>
            {isNotify && <NotifyBar />}
          </li>
          <li className="relative" ref={profileRef}>
            <button
              className="rounded-full focus:outline-none"
              onClick={toggleProfile}
            >
              <img
                src={user}
                alt="user"
                className="w-8 h-8 object-cover rounded-full"
              />
            </button>
            {isProfile && <ProfileBar />}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

const ProfileBar = () => {
  const profLinks = [
    {
      icon: <HiOutlineUser />,
      text: "Profile",
    },
    {
      icon: <IoMdSettings />,
      text: "Settings",
    },
    {
      icon: <CgLogOut />,
      text: "Logout",
    },
  ];

  return (
    <div className="absolute top-full right-0 w-56 z-50 bg-[#24262D] rounded-md shadow-sm p-3">
      <ul>
        {profLinks.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 hover:bg-all hover:cursor-pointer text-gray-400 hover:rounded hover:text-white px-2 py-1 mb-1.5"
          >
            <span className="mt-0.5">{item.icon}</span>
            <span className="text-sm font-medium">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotifyBar = () => {
  const profLinks = [
    {
      num: 13,
      text: "Messages",
    },
    {
      num: 2,
      text: "Sales",
    },
    {
      num: 0,
      text: "Alert",
    },
  ];

  return (
    <div className="absolute top-full right-0 w-56 z-50 bg-[#24262D] rounded-md shadow-sm p-3">
      <ul>
        {profLinks.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between hover:bg-all hover:cursor-pointer text-gray-400 hover:rounded hover:text-white px-2 py-1 mb-1.5"
          >
            <span className="text-sm font-medium">{item.text}</span>
            {item.num > 0 && (
              <span className="bg-red-700 bg-opacity-100 text-white text-sm px-3 py-0.5 rounded-full">
                {item.num}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
