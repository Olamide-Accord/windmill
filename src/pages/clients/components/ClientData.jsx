import React from "react";
import Table from "../../../components/Table";
import { clients } from "../../../data";

const columns = [
  {
    header: "Client",
    key: "name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.image}
          alt="client"
          className="w-14 h-14 object-center rounded-full mr-2"
        />
        <div>
          <h6 className="font-semibold mb-1">{row.name}</h6>
          <p className="text-sm">{row.job}</p>
        </div>
      </div>
    ),
  },

  {
    header: "Amount",
    key: "salary",
    render: (row) => <span>${row.salary}.00</span>,
  },
  {
    header: "Status",
    key: "status",
    render: (row) => (
      <div
        className={`px-2.5 inline-block rounded-full py-1 capitalize text-sm font-medium text-white shadow ${
          row.status === "approved"
            ? "bg-green-600"
            : row.status === "pending"
            ? "bg-orange-600"
            : row.status === "denied"
            ? "bg-red-600"
            : "bg-black"
        }`}
      >
        {row.status}
      </div>
    ),
  },
  { header: "Date", key: "date" },
];

const ClientData = () => {
  return (
    <div className="rounded-lg">
      <Table columns={columns} data={clients} rowsPerPage={10} />
    </div>
  );
};

export default ClientData;
