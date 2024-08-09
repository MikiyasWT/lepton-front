import React from "react";

interface Row {
  [key: string]: any;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: Row | null;
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
            <strong>Customer ID:</strong> {rowData.customerId}
          </p>
          <p className="text-gray-700">
            <strong>Total Amount:</strong> {rowData.total_amount}
          </p>
          <p className="text-gray-700">
            <strong>Due Date:</strong> {rowData.due_date}
          </p>
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
