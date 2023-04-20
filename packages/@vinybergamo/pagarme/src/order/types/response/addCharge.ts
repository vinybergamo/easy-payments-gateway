interface AddCharge {
  id: string;
  code: string;
  gateway_id: string;
  amount: number;
  status: string;
  currency: string;
  payment_method: string;
  due_at: string;
  paid_at: string;
  created_at: string;
  updated_at: string;
  order: {
    id: string;
    code: string;
    amount: number;
    currency: string;
    closed: boolean;
    status: string;
    created_at: string;
    updated_at: string;
  };
  customer: {
    id: string;
    name: string;
    email: string;
    delinquent: boolean;
    created_at: string;
    updated_at: string;
  };
  last_transaction: {
    id: string;
    transaction_type: string;
    funding_source: string;
    gateway_id: string;
    amount: number;
    status: string;
    success: boolean;
    installments: number;
    statement_descriptor: string;
    acquire_name: string;
    acquire_affiliation_code?: string;
    acquirer_tid: string;
    acquirer_nsu: string;
    acquirer_auth_code: string;
    acquirer_message: string;
    acquirer_return_code: string;
    operation_type: string;
    credit_card?: {
      id: string;
      last_four_digits: string;
      brand?: string;
      holder_name?: string;
      exp_month: string;
      exp_year: string;
      status: string;
      created_at: string;
      updated_at: string;
      billing_address?: {
        zip_code: string;
        city: string;
        state: string;
        country: string;
        line_1: string;
      };
    };
    created_at: string;
    updated_at: string;
  };
}

export type AddChargeResponse = AddCharge | undefined;
