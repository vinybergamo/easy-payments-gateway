import { Customer, Payment } from "../common";

export interface AddCharge {
  order_id: string;
  amount: number;
  payment: Payment;
  due_at?: string;
  customer_id?: string;
  customer?: Customer;
  metadata?: {
    [key: string]: string;
  };
}
