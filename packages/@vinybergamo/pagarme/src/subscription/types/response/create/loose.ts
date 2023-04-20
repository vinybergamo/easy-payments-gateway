interface Loose {
  id: string;
  code: string;
  start_at: string;
  interval: string;
  interval_count: number;
  billing_type: string;
  current_cycle: {
    id: string;
    start_at: string;
    end_at: string;
    billing_at: string;
  };
  next_billing_at: string;
  payment_method: string;
  currency: string;
  installments: number;
  status: string;
  created_at: string;
  updated_at: string;
  customer: {
    id: string;
    name: string;
    email: string;
    deliquent: boolean;
    created_at: string;
    updated_at: string;
    phones: {
      [key: string]: string;
    };
  };
  items: Array<{
    id: string;
    name: string;
    description: string;
    quantity: number;
    status: string;
    created_at: string;
    updated_at: string;
    pricing_scheme: {
      price: number;
      scheme_type: string;
    };
  }>;
}

export type LooseResponse = Loose | undefined;
