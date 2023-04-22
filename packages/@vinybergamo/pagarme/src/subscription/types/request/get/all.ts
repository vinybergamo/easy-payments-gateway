interface Params {
  status?: "active" | "canceled" | "future";
  code?: string;
  billing_type?: "prepaid" | "postpaid" | "exact_day";
  customer_id?: string;
  plan_id?: string;
  card_id?: string;
  next_billing_since?: Date;
  next_billing_until?: Date;
  created_since?: Date;
  created_until?: Date;
  page?: number;
  size?: number;
}

export type GetAllSubscriptionsParams = Params;
