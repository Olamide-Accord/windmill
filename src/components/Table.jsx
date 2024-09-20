import React, { useState, useEffect } from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const Table = ({ columns, data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginated = data.slice(startIndex, startIndex + rowsPerPage);
    setPaginatedData(paginated);
  }, [currentPage, data, rowsPerPage]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container rounded-lg mx-auto md:px-2">
      <div className="hidden md:block">
        <table className="min-w-full bg-main table-auto">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="p-4 text-sm text-left font-semibold uppercase text-gray-400 border-b border-b-gray-700 text-opacity-100"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-b-gray-700 bg-main text-gray-400 text-opacity-100"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-4">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-y-4 bg-transparent md:hidden">
        {paginatedData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="p-6 mb-4 bg-main rounded-xl shadow-xs z-10"
          >
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="mb-2 text-gray-400">
                <span className="font-semibold text-lg mr-2">
                  {column.header}:{" "}
                </span>
                <span>
                  {column.render ? column.render(row) : row[column.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-4">
        <h6 className="font-medium text-xs text-gray-400">
          SHOWING {currentPage * rowsPerPage - rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, data.length)} OF {data.length}
        </h6>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            className="text-gray-400 text-xl"
            disabled={currentPage === 1}
          >
            <PiCaretLeftLight />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`px-2 py-1 text-sm ${
                currentPage === index + 1
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700"
              } rounded bg-main`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            className="text-gray-400 text-xl"
            disabled={currentPage === totalPages}
          >
            <PiCaretRightLight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
