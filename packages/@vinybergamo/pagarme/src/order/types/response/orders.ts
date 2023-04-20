interface Phones {
  mobile_phone: {
    country_code: string | null;
    number: string | null;
    area_code: string | null;
  };
  home_phone?: {
    country_code: string | null;
    number: string | null;
    area_code: string | null;
  } | null;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  document: string;
  document_type: string;
  delinquent: boolean;
  created_at: string;
  updated_at: string;
  phones: Phones;
}

interface Item {
  id: string;
  type: string;
  description: string;
  amount: number;
  quantity: number;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Charge {
  id: string;
  code: string;
  gateway_id: string;
  amount: number;
  status: string;
  currency: string;
  payment_method: string;
  paid_at: string;
  created_at: string;
  updated_at: string;
  customer: Customer;
}

interface Orders {
  data: Array<{
    id: string;
    code: string;
    status: string;
    amount: number;
    currency: string;
    closed: boolean;
    items: Array<Item>;
    customer: Customer;
    created_at: string;
    updated_at: string;
    closed_at: string;
    charges: Array<Charge>;
  }>;
  paging: {
    total: number;
    next: string;
  };
}

export type OrdersResponse = Orders | undefined;
