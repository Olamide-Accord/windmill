import React from "react";
import Layout from "../../components/Layout";
import TransactionCard from "./components/TransactionCard";
import DashCard from "./components/DashCard";
import TransferList from "./components/TransferList";

const Transactions = () => {
  return (
    <Layout header="Transactions">
      <DashCard />
      <TransactionCard />
      <TransferList />
    </Layout>
  );
};

export default Transactions;
