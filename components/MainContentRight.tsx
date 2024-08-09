import { useEffect, useState } from "react";
import Chart from "./Chart";
import Table from "./Table";
import { getAllInvoices } from "../Services/invoice";

const MainContentRight = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 pb-32">
      <TableDisplay />
      <Chart />
    </div>
  );
};

export default MainContentRight;


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
  customerName: string;
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
}

const SkeletonLoader: React.FC = () => {
  const columns = [1, 2, 3, 4, 5, 6, 7, 8]; // Adjust this array length based on your table structure
  return (
    <div className="animate-pulse">
      <div className="flex justify-end items-center h-16 bg-white"></div>
      <div className="p-4">
        <div className="h-6 bg-white mb-4 w-32"></div>
        <table className="min-w-full divide-y divide-white">
          <thead>
            <tr>
              {columns.map((_, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                >
                  <div className="h-4 "></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y ">
            {Array(5)
              .fill(null)
              .map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100"
                    >
                      <div className="h-4 bg-gray-100"></div>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableDisplay: React.FC = () => {
  const [data, setData] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoices = await getAllInvoices();
        setData(invoices);
      } catch (error) {
        setError("Failed to fetch invoices");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePay = (row: Invoice) => {
    console.log("Pay action for:", row);
    // Implement pay action here
  };

  const handleEdit = (row: Invoice) => {
    console.log("Edit action for:", row);
    // Implement edit action here
  };

  const handleDelete = (row: Invoice) => {
    console.log("Delete action for:", row);
    // Implement delete action here
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Customer Name", accessor: "customerName" },
    { header: "Total Amount", accessor: "total_amount" },
    { header: "Due Date", accessor: "due_date" },
    { header: "Status", accessor: "status" },
    // Add other columns here
  ];

  if (loading) return <SkeletonLoader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white border-gray-300 px-2 flex-grow shadow-xl rounded-xl w-full">
      {/* Upper Container */}
      <div className="flex justify-end items-center h-16 border-b px-4">
        <span className="text-gray-700">x</span>
        <span className="text-gray-700">x</span>
        <span className="text-gray-700">x</span>
      </div>

      {/* Table */}
      <div>
        <h3 className="text-start text-blue-400 font-serif px-2">Invoices</h3>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

