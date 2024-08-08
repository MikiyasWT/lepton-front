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



  const columns = [
    { header: "Invoice ID", accessor: "invoice_id" },
    { header: "Total Amount", accessor: "amount" },
    { header: "Status", accessor: "invoice_status" },
  ];
  
  const data = [
    { invoice_id: 28, amount:125, invoice_status: "Pending" },
    { invoice_id: 28, amount:125, invoice_status: "Pending" },
    { invoice_id: 28, amount:125, invoice_status: "Pending" },
    { invoice_id: 28, amount:125, invoice_status: "Pending" },
    { invoice_id: 28, amount:125, invoice_status: "Pending" },
  
    
  ];
  
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
  
  const TableDisplay = () => {

    const [data, setData] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const invoices = await getAllInvoices();
          setData(invoices);
          console.log(invoices)
        } catch (error) {
          setError('Failed to fetch invoices');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    const handlePay = (row: Invoice) => {
      console.log('Pay action for:', row);
      // Implement pay action here
    };
  
    const handleEdit = (row: Invoice) => {
      console.log('Edit action for:', row);
      // Implement edit action here
    };
  
    const handleDelete = (row: Invoice) => {
      console.log('Delete action for:', row);
      // Implement delete action here
    };
  
    const columns = [
      { header: 'ID', accessor: 'id' },
      { header: 'Customer ID', accessor: 'customerId' },
      { header: 'Total Amount', accessor: 'total_amount' },
      { header: 'Due Date', accessor: 'due_date' },
      { header: 'Status', accessor: 'status' },
      // Add other columns here
    ];
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div
        className="bg-white border-gray-300 px-2 flex-grow shadow-xl rounded-xl"
        style={{ flex: "0 0 50%" }}
      >
        {/* Upper Container */}
  
        <div className="flex justify-end items-center h-16   px-4">
          <span>x</span>
          <span>x</span>
          <span>x</span>
        </div>
  
        {/* table */}
        <div>
           <h3 className="text-start text-blue-400 font-serif px-2">Invoices</h3>
          <Table columns={columns} data={data} />
        </div>
      </div>
    );
  };