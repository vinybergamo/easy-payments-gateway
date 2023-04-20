interface Close {
  id: string;
  code: string;
  amount: number;
  currency: string;
  closed: boolean;
  items: Array<{
    id: string;
    description: string;
    amount: number;
    quantity: number;
    status: string;
    created_at: string;
    updated_at: string;
  }>;
  customer: {
    id: string;
    name: string;
    delinquent: boolean;
    created_at: string;
    updated_at: string;
    phones: {
      [key: string]: string | undefined;
    };
    metadata?: {
      [key: string]: any;
    };
  };
  status: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
}

export type CloseResponse = Close | undefined;
