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

interface BillingAddress {
  zip_code: string;
  city: string;
  state: string;
  country: string;
  line_1: string;
}

interface Card {
  id: string;
  first_six_digits: string;
  last_four_digits: string;
  brand: string;
  holder_name: string;
  exp_month: string;
  exp_year: string;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
  billing_address?: BillingAddress;
  network_token?: {
    token_unique_reference: string;
    status: string;
  };
}

interface GatewayResponse {
  code?: string;
  errors?: Array<any>;
}

interface LastTransaction {
  operation_key?: string;
  id: string;
  transaction_type: string;
  gateway_id?: string;
  amount: number;
  status: string;
  success: boolean;
  installments?: number;
  installment_type?: string;
  statement_descriptor?: string;
  acquire_tid?: string;
  acquirer_nsu?: string;
  acquirer_auth_code?: string;
  acquirer_message?: string;
  acquirer_return_code?: string;
  entry_mode?: string;
  card?: Card;
  payment_type: string;
  created_at: string;
  updated_at: string;
  gateway_response?: GatewayResponse;
  antifraud_response: {
    [key: string]: any;
  };
  metadata: {
    [key: string]: any;
  };
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
  last_transaction: LastTransaction;
  checkouts?: Array<any>;
}

interface Order {
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
}

export type OrderResponse = Order | undefined;
