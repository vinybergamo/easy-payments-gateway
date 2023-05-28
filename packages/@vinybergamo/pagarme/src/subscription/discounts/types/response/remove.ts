interface Subscription {
  id: string;
  code: string;
  start_at: string;
  interval: "day" | "week" | "month" | "year";
  interval_count: number;
  billing_type: "postpaid" | "prepaid";
  next_billing_at: string;
  paymnet_method: string;
  currency: "BRL";
  installments: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface RemoveDiscountReponse {
  id: string;
  value: number;
  discount_type: "flat" | "percentage";
  cycles: 1;
  status: "deleted";
  created_at: string;
  updated_at: string;
  deleted_at: string;
  subscription: Subscription;
}
