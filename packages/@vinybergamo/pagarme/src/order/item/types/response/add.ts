interface Item {
  id: string;
  description: string;
  amount: number;
  quantity: number;
  status: string;
}

interface Order {
  id: string;
  code: string;
  amount: number;
  created_at: string;
  updated_at: string;
  currency: string;
  status: string;
  metadata: {
    [key: string]: string;
  };
  items: Array<Item>;
}

interface AddItem {
  id: string;
  type: string;
  description: string;
  amount: number;
  quantity: number;
  status: string;
  created_at: string;
  updated_at: string;
  order: Order;
}

export type AddItemResponse = AddItem | undefined;
