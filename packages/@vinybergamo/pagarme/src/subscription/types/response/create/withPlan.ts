interface WithPlan {
  id: string;
  code: string;
  start_at: string;
  interval: string;
  interval_count: number;
  billing_type: "prepaid" | "postpaid" | "exact_day";
  current_cycle: {
    id: string;
    start_at: string;
    end_at: string;
    billing_at: string;
    status: string;
    cycle: number;
  };
  next_billing_at: string;
  payment_method: "boleto" | "credit_card" | "debit_card";
  currency: string;
  installments: number;
  status: string;
  boleto_due_days?: number;
  created_at: string;
  updated_at: string;
  customer: {
    id: string;
    name: string;
    email: string;
    document: string;
    document_type: string;
    type: "individual" | "company";
    deliquent: boolean;
    created_at: string;
    updated_at: string;
    phones: {
      home_phone?: {
        country_code: string;
        area_code: string;
        number: string;
      };
      mobile_phone?: {
        country_code: string;
        area_code: string;
        number: string;
      };
    };
  };
  plan: {
    id: string;
    name: string;
    description: string;
    url: string;
    interval: "day" | "week" | "month" | "year";
    interval_count: number;
    billing_type: "prepaid" | "postpaid" | "exact_day";
    payment_methods: Array<"boleto" | "credit_card" | "debit_card">;
    installments: Array<number>;
    status: string;
    currency: string;
    created_at: string;
    updated_at: string;
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
      scheme_type: "unit" | "package" | "tier";
    };
  }>;
  boleto: {};
}

export type WithPlanResponse = WithPlan | undefined;
