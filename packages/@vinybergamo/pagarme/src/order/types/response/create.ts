interface Create {
  id: string;
  code: string;
  amount: number;
  currency: string;
  closed: boolean;
  items: Array<{
    id: string;
    type: string;
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
    email: string;
    delinquent: boolean;
    created_at: string;
    updated_at: string;
    phones: {
      [key: string]: string | undefined;
    };
  };
  status: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  charges: Array<{
    id: string;
    code: string;
    amount: number;
    paid_amount: number;
    status: string;
    currency: string;
    payment_method: string;
    paid_at: string;
    created_at: string;
    updated_at: string;
    customer: {
      id: string;
      name: string;
      email: string;
      delinquent: boolean;
      created_at: string;
      updated_at: string;
      phones: {
        [key: string]: string | undefined;
      };
    };
    last_transaction: {
      operation_key: string;
      id: string;
      transaction_type: string;
      gateway_id: string;
      amount: number;
      status: string;
      success: boolean;
      installments: number;
      installment_type: string;
      acquirer_name: string;
      acquirer_tid: string;
      acquirer_nsu: string;
      acquirer_auth_code: string;
      acquirer_message: string;
      acquirer_return_code: string;
      entry_mode: string;
      operation_type: string;
      network_token: {
        [key: string]: any;
      };
      payment_type: string;
      created_at: string;
      updated_at: string;
      gateway_response: {
        code: string;
        error: Array<{
          [key: string]: any;
        }>;
      };
      antifraud_response: {
        [key: string]: any;
      };
      metadata: {
        [key: string]: any;
      };
    };
  }>;
}

export type CreateResponse = Create | undefined;
