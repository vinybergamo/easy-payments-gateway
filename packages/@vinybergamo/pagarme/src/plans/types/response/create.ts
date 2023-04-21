type PaymentMethods = "credit_card" | "debit_card" | "boleto";

interface Create {
  id: string;
  name: string;
  url: string;
  interval: "day" | "week" | "month" | "year";
  billing_type: "prepaid" | "postpaid" | "exact_day";
  payment_methods: Array<PaymentMethods>;
  status: "active" | "inactive" | "deleted";
  currency: "BRL";
  created_at: string;
  updated_at: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    status: "active" | "inactive" | "deleted";
    created_at: string;
    updated_at: string;
    pricing_scheme: {
      price: number;
      scheme_type: "unit" | "package" | "tier";
    };
  }>;
}

export type CreatePlanResponse = Create | undefined;
