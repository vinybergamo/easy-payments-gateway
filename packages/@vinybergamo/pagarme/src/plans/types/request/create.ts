type PaymentMethods = "boleto" | "credit_card" | "debit_card";

interface Create {
  payment_methods: Array<PaymentMethods>;
  installments: Array<number>;
  interval: "day" | "week" | "month" | "year";
  interval_count?: number;
  items: Array<{
    name: string;
    quantity: number;
    pricing_scheme: {
      scheme_type: "unit" | "tier" | "package";
      price: number;
    };
  }>;
  quantity?: number | null;
  name: string;
  currency: "BRL";
  billing_type: "prepaid" | "postpaid" | "exact_day";
  pricing_scheme: {
    scheme_type: "unit" | "tier" | "package";
    price: number;
  };
}

export type CreatePlanRequest = Create;
