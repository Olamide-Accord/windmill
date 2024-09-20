import React from "react";
import SettingsTab from "./SettingsTab";
import Layout from "../../../components/Layout";

const SettingsLayout = ({ children }) => {
  return (
    <Layout>
      <div className="flex gap-6 flex-col md:flex-row md:gap-10 items-start mb-10">
        <SettingsTab />
        <div className="w-full md:w-4/5">{children}</div>
      </div>
    </Layout>
  );
};

export default SettingsLayout;
