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