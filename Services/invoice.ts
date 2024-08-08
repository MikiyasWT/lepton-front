import api from './api';

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

// {
//     "customerId": "06aaa1bd-f525-41c6-b179-ab3999f34394",
//     "due_date": "2024-08-30T00:00:00.000Z",
//     "items": [
//       {
//         "itemId": "42bda136-227e-4697-8771-9925e8482b5f",
//         "quantity": 21
//       }
//     ]
//   }
export async function BuyItem(payload: any) {
    try {
        return  await api.post(`/invoices`, payload);
    } catch (error) {
      console.error('item bought:', error);
      throw error;
    }
}
export async function getAllInvoices(){
    try {
      const response = await api.get('/invoices');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export async function getAllItems(invoiceID: any) {
    try {
        return await api.get(`/invoices/${invoiceID}`)       
    } catch (error) {
      console.error(error);
      throw error;
    } 
  }


//   {"status": "Paid"}
  export async function payInvoice(payload: any, invoiceID: any) {
    try {
        return  await api.put(`/invoices/${invoiceID}/pay`, payload);
    } catch (error) {
      console.error('invoice paid:', error);
      throw error;
    }
} 


export async function deleteInvoice(invoiceID: any) {
    try {
        return await api.delete(`/invoices/${invoiceID}`)
    } catch (error) {
      console.error('invoice deleted:', error);
      throw error;
    }
}

export async function pdfExportInvoice(invoiceID: any) {
    try {      
        return await api.get(`/invoices/export/pdf/${invoiceID}`)       
    } catch (error) {
      console.error(error);
      throw error;
    } 
  }

  export async function excelExportInvoice() {
    try {      
        return await api.get(`invoices/export/excel`)       
    } catch (error) {
      console.error(error);
      throw error;
    } 
  } 

// Buy POST  https://lepton-backend.onrender.com/api/invoices
// Get All GET https://lepton-backend.onrender.com/api/invoices
// Get Invoice By Id GET https://lepton-backend.onrender.com/api/invoices/5b61b16e-c48f-48ac-b669-f3b4b8d8ef38
// Pay invoice PUT https://lepton-backend.onrender.com/api/invoices/4a6fd787-f3ce-4c26-ad02-b1f19a0c3adf/pay
// delete invoice DELETE https://lepton-backend.onrender.com/api/invoices/4a6fd787-f3ce-4c26-ad02-b1f19a0c3adf
// export pdf GET  https://lepton-backend.onrender.com/api/invoices/export/pdf/5b61b16e-c48f-48ac-b669-f3b4b8d8ef38
// export allExcel GET https://lepton-backend.onrender.com/api/invoices/export/excel