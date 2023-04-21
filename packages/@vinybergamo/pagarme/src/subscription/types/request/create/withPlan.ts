interface Customer {
  name: string;
  email: string;
  type: "individual" | "company";
  document: string;
  document_type: "CPF" | "CNPJ" | "PASSPORT";
}

type WithCustomer = {
  customer_id?: never;
  customer: Customer;
};

type WithCustomerId = {
  customer_id: string;
  customer?: never;
};

type CustomerInfo = WithCustomerId | WithCustomer;

interface Card {
  number: string;
  holder_name: string;
  holder_document: string;
  exp_month: number;
  exp_year: number;
  cvv: string;
}

type PaymentWithCard = {
  payment_method: "credit_card" | "debit_card";
  card: Card;
};

type PaymentWithBoleto = {
  payment_method: "boleto";
  card?: never;
};

type Payment = PaymentWithCard | PaymentWithBoleto;

type WithPlan = CustomerInfo &
  Payment & {
    plan_id: string;
  };

export type WithPlanRequest = WithPlan;
