import { Item } from "@/types";

interface Invoice {
    id: string;
    customerId: string;
    customerName: string;
    total_amount: number;
    due_date: string;
    items: Item[];
  }
  
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    rowData: Invoice | null; // Use the updated Invoice type
    onConfirm: () => void;
  }

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    rowData,
    onConfirm,
  }) => {
    if (!isOpen || !rowData) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Confirm Payment</h2>
          <div className="mb-4 space-y-2">
            <p className="text-gray-700">
              <strong>Invoice ID:</strong> {rowData.id}
            </p>
            <p className="text-gray-700">
              <strong>Customer Name:</strong> {rowData.customerName}
            </p>
            <p className="text-gray-700">
              <strong>Total Amount:</strong> {rowData.total_amount} <strong>ETB</strong>
            </p>
            <p className="text-gray-700">
              <strong>Due Date:</strong> {rowData.due_date}
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Items Purchased:</h3>
              <ul className="mt-2 space-y-2">
                {rowData.items.map(item => (
                  <li key={item.id} className="text-gray-700">
                    <p><strong>Description:</strong> {item.description}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Unit Price:</strong> {item.unit_price} <strong>ETB</strong></p>
                    <p><strong>Total:</strong> {item.total} <strong>ETB</strong></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
