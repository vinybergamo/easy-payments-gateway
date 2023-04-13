import { Address, Customer, Item, Payment, Phone, Shipping } from "../common";

interface SubMerchant {
  Merchant_Category_Code?: string;
  Payment_Facilitator_Code?: string;
  Code?: string;
  name?: string;
  Document?: string;
  Type?: "individual" | "company";
  Address?: Address;
  Phones?: Phone;
}

interface CreateOrderBody {
  customer: Customer;
  customer_id?: string;
  items: Array<Item>;
  shipping?: Shipping;
  payments: Array<Payment>;
  closed: boolean;
  metadata?: Object;
  device?: Object;
  ip?: string;
  session_id?: string;
  antifraud_enabled: boolean;
  antifraud?: Object;
  sub_merchant?: SubMerchant;
}

interface CreateMultiPaymentsMethodsOrder {
  items: Array<Item>;
  code?: string;
  customer_id?: string;
  customer?: Customer;
  shipping?: Shipping;
  payments: Array<Payment>;
  closed: boolean;
  metadata?: Object;
}

export type CreateOrder = CreateOrderBody | CreateMultiPaymentsMethodsOrder;
