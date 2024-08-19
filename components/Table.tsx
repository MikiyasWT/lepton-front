import React from "react";

interface Item {
  id: string;
  invoiceId: string;
  itemId: string;
  description: string;
  quantity: number;
  unit_price: string;
  total: string;
  createdAt: string;
  updatedAt: string;
}

interface Invoice {
  id: string;
  customerId: string;
  total_amount: string;
  due_date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  items: Item[];
}

interface Column {
  header: string;
  accessor: string;
}

interface Row {
  [key: string]: any; // Allows for dynamic keys
}

interface TableProps {
  columns: Column[];
  data: Row[];
  onPay?: (row: Row) => void; // Callback function for Pay action
  onEdit?: (row: Row) => void; // Callback function for Edit action
  onDelete?: (row: Row) => void; // Callback function for Delete action
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  onPay,
  onEdit,
  onDelete,
}) => {
  // Add the action columns
  const actionColumns = [
    { header: "Pay", accessor: "pay" },
    { header: "Edit", accessor: "edit" },
    { header: "Delete", accessor: "delete" },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const shortenValue = (value: string, length: number) => {
    return value.length > length ? value.substring(0, length) + "..." : value;
  };

  return (
    <div className="overflow-x-auto max-h-64">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            {columns.concat(actionColumns).map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 max-h-48 overflow-y-auto">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {column.accessor === "id" ? (
                    shortenValue(row[column.accessor], 8)
                  ) : column.accessor === "due_date" ? (
                    formatDate(row[column.accessor])
                  ) : column.accessor === "status" ? (
                    row[column.accessor] === "Paid" ? (
                      <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                        {row[column.accessor]}
                      </span>
                    ) : row[column.accessor] === "Pending" ? (
                      "Unpaid"
                    ) : (
                      row[column.accessor]
                    )
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
              {/* Action buttons */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.status === "Paid" ? (
                  <span className="text-green-600">Paid</span>
                ) : (
                  <button
                    onClick={() => onPay?.(row)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Pay
                  </button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button
                  onClick={() => onEdit?.(row)}
                  className="text-yellow-600 hover:text-yellow-900"
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button
                  onClick={() => onDelete?.(row)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
