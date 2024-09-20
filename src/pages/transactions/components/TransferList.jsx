import React, { useState } from "react";
import Table from "../../../components/Table";
import { transactions } from "../../../data";
import { BsThreeDots } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const ActionModal = ({ transaction, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center">
      <div className="bg-main text-gray-200 p-6 rounded-xl shadow-md w-96 md:w-[26rem]">
        <div className="flex justify-end">
          <button className="text-gray-200 text-xl mb-2" onClick={onClose}>
            <IoMdCloseCircle />
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-4">Transaction Actions</h2>
        <div className="flex gap-y-2 flex-col">
          <p>
            <span className="font-semibold text-lg">Transaction ID: </span>
            {transaction.transactionId}
          </p>
          <p>
            <span className="font-semibold text-lg">Category: </span>
            {transaction.category}
          </p>
          <p>
            <span className="text-lg font-semibold">Date:</span>{" "}
            {transaction.date}
          </p>
          <p>
            <span className="text-lg font-semibold">Amount:</span> $
            {transaction.amount.toFixed(2)}
          </p>
          <p>
            <span className="font-semibold text-lg">Payment Method:</span>{" "}
            {transaction.paymentMethod}
          </p>
          <p>
            <span className="font-semibold text-lg">Status:</span>{" "}
            {transaction.status}
          </p>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-blue-600 text-white py-1 px-4 rounded"
            onClick={onClose}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white py-1 px-4 rounded"
            onClick={onClose}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TransferList = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const columns = [
    {
      header: "Transaction ID",
      key: "transactionId",
    },
    {
      header: "Category",
      key: "category",
    },
    {
      header: "Date",
      key: "date",
    },
    {
      header: "Amount",
      key: "amount",
      render: (row) => `$${row.amount.toFixed(2)}`,
    },
    {
      header: "Payment Method",
      key: "paymentMethod",
    },
    {
      header: "Status",
      key: "status",
    },
    {
      header: "Balance",
      key: "balance",
      render: (row) => `$${row.balance.toFixed(2)}`,
    },
    {
      header: "Action",
      key: "action",
      render: (row) => (
        <button
          className="text-gray-400 text-2xl flex md:items-center"
          onClick={() => setSelectedTransaction(row)}
        >
          <BsThreeDots />
        </button>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} data={transactions} rowsPerPage={10} />

      {selectedTransaction && (
        <ActionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </div>
  );
};

export default TransferList;
