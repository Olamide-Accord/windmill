import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, header }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const toggleSidebar = () => setIsSidebar(!isSidebar);
  return (
    <div className="flex flex-col flex-1 w-full bg-all h-screen">
      <Navbar toggleSidebar={toggleSidebar} isSidebar={isSidebar} />
      <Sidebar isSidebar={isSidebar} />

      <section className="h-full mx-auto md:ml-64 w-11/12 md:w-10/12 overflow-y-auto mt-28 mb-10">
        <div className="grid px-10 w-full">
          <h5 className="font-bold mb-5 md:mb-8 text-gray-200 text-xl sm:text-2xl">
            {header}
          </h5>
          <div className="">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
