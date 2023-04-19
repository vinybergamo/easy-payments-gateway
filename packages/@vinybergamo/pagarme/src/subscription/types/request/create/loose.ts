import { Address, Phone } from "@vinybergamo/pagarme/src/types/commons";

interface Item {
  pricing_scheme: {
    scheme_type: "unit" | "package" | "volume" | "tier";
    price: number;
  };
  name: string;
  quantity: number;
  description: string;
}

interface BillingType {
  billing_type: "prepaid" | "postpaid" | "exact_day";
  billing_day?: number;
}

type BillingTypeExactDay = BillingType & {
  billing_type: "exact_day";
  billing_day: number;
};

type Billing = BillingTypeExactDay | BillingType;

type CustomerRequiredIfIdIsNot = {
  customer: {
    name: string;
    type?: "individual" | "company";
    email: string;
    code?: string;
    document?: string;
    document_type?: "CPF" | "CNPJ" | "PASSPORT";
    gender?: "male" | "female";
    address?: Address;
    phones?: Phone;
    birthdate?: string;
    metadata?: {
      [key: string]: any;
    };
  };
};

type CustomerRequiredIfId = {
  customer_id: string;
};

type Customer = CustomerRequiredIfId | CustomerRequiredIfIdIsNot;

type BillingAddressWithoutBillingId = {
  billing_address: Address;
  billing_address_id?: string;
};

type BillingAddressWithBillingId = {
  billing_address_id: string;
  billing_address?: Address;
};

type BillingAddress =
  | BillingAddressWithBillingId
  | BillingAddressWithoutBillingId;

type Card = BillingAddress & {
  number: string;
  holder_name?: string;
  holder_document?: string;
  exp_month: number;
  exp_year: number;
  cvv: number;
  brand?: string;
  label: string;
};

type PaymentWithCard = BillingAddress & {
  payment_method: "credit_card" | "debit_card";
  card: Card;
};

type PaymentWithBoleto = {
  payment_method: "boleto";
};

type Payment = PaymentWithBoleto | PaymentWithCard;

type ItemsRequiredIfDescriptionIsNot = {
  items: Array<Item>;
  description?: string;
};

type SchemeTypeWithUnit = {
  scheme_type: "unit";
  price: number;
  minimun_price?: number;
  price_brackets?: Array<{
    start_quantity?: number;
    end_quantity?: number;
    overage_price?: number;
    price?: number;
  }>;
};

type SchemeTypeWithoutUnit = {
  scheme_type: "package" | "volume" | "tier";
  price?: number;
  minimun_price?: number;
  price_brackets?: Array<{
    start_quantity?: number;
    end_quantity?: number;
    overage_price?: number;
    price?: number;
  }>;
};

type ItemsRequiredIfDescription = {
  description: string;
  items?: Array<Item>;
};

type SchemaType = SchemeTypeWithUnit | SchemeTypeWithoutUnit;

type PricingScheme = SchemaType;

type Items = ItemsRequiredIfDescription | ItemsRequiredIfDescriptionIsNot;

type WithoutItems = {
  items?: Array<Item>;
  pricing_scheme: PricingScheme;
  description: string;
  quantity: number;
};

type WithItems = {
  items: Items;
  pricing_scheme?: PricingScheme;
  description?: string;
  quantity?: number;
};

type ItemsOrPricingScheme = WithItems | WithoutItems;

type Loose = Billing &
  Payment &
  ItemsOrPricingScheme &
  Customer & {
    code?: string;
    currency?: "BRL";
    start_at?: string;
    interval: "day" | "week" | "month" | "year";
    minimum_price: number | null;
    interval_count: number;
    installments: number;
    statement_descriptor?: string;
    discounts?: Array<{
      cycles: string;
      value: number;
      discount_type: "percentage" | "flat";
    }>;
    increments?: Array<{
      value: number;
      cycles: string;
      increment_type: "percentage" | "flat";
    }>;
    gateway_filiation_id?: string;
    boleto_due_days?: string;
    metadata?: {
      [key: string]: any;
    };
  };

export type LooseRequest = Loose;
