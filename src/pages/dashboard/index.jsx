import React from "react";
import Layout from "../../components/Layout";
import DashboardCards from "./components/DashboardCards";
import DataOverview from "./components/DataOverview";

const Dashboard = () => {
  return (
    <Layout header="Dashboard">
      <DashboardCards />
      <DataOverview />
    </Layout>
  );
};

export default Dashboard;
