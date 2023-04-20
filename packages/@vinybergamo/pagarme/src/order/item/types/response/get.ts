interface Item {
  id: string;
  type: string;
  description: string;
  amount: number;
  quantity: number;
  status: string;
  created_at: string;
  updated_at: string;
  code: string;
  order: {
    id: string;
    code: string;
    amount: number;
    closed: boolean;
    created_at: string;
    updated_at: string;
    closed_at: string;
    currency: string;
    status: string;
    items: Array<{
      id: string;
      description: string;
      amount: number;
      quantity: number;
      status: string;
    }>;
  };
}

export type GetItemResponse = Item | undefined;
