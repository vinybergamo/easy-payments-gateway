export interface AddDiscountRequest {
  value: string;
  discount_type: "flat" | "percentage";
  cycles?: string;
  item_id?: string;
}
