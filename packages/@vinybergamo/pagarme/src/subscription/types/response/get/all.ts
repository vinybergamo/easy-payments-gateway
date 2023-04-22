type PaymentMethods = "boleto" | "debit_card" | "credit_card";

interface Item {
  id: string;
  name: string;
  description: string;
  quantity: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  pricing_scheme: {
    price: number;
    scheme_type: "unit" | "package" | "tier";
  };
}

interface Data {
  id: string;
  code: string;
  start_at: Date;
  interval: "day" | "week" | "month" | "year";
  interval_count: number;
  billing_type: "prepaid" | "postpaid" | "exact_day";
  current_cycle: {
    id: string;
    start_at: Date;
    end_at: Date;
    billing_at: Date;
    status: string;
    cycle: number;
  };
  next_billing_at: Date;
  payment_method: "boleto" | "debit_card" | "credit_card";
  currency: string;
  installments: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  customer: {
    id: string;
    name: string;
    email: string;
    document: string;
    document_type: "cpf" | "cnpj" | "passport";
    type: "individual" | "company";
    delinquent: boolean;
    created_at: Date;
    updated_at: Date;
    phones?: {
      mobile_phone?: {
        country_code: string;
        area_code: string;
        number: string;
      };
      home_phone?: {
        country_code: string;
        area_code: string;
        number: string;
      };
    };
  };
  plan: {
    id: string;
    name: string;
    url: string;
    interval: "day" | "week" | "month" | "year";
    interval_count: number;
    billing_type: "prepaid" | "postpaid" | "exact_day";
    payment_methods: Array<PaymentMethods>;
    installments: Array<number>;
    status: string;
    currency: string;
    created_at: Date;
    updated_at: Date;
  };
  items: Array<Item>;
}

interface Paging {
  total: number;
  next?: string;
  previous?: string;
}

export type GetAllSubscriptionsResponse = {
  data: Array<Data>;
  paging: Paging;
};
