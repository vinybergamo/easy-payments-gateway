import { Customer, Address } from "@vinybergamo/pagarme/types/commons";

interface Card {
  number: string;
  holder_name: string;
  holder_document: string;
  exp_month: number;
  exp_year: number;
  cvv: string;
  brand?: string;
  label: string;
  billing_address_id?: string;
  billing_address: Address;
  card_id?: string;
  card_token?: string;
}

interface PaymentMethods {
  credit_card: {
    operation_type: "auth_and_capture" | "auth_only" | "pre_auth";
    installments: number;
    card: Card;
  };
  cash: {
    [key: string]: any;
  };
  Pix: {
    expires_in?: string;
    expires_at?: string;
    additional_information?: {
      Name: string;
      Value: string;
    };
  };
  boleto: {
    bank: string;
    instructions: string;
    due_at: string;
    nosso_numero: string;
    type: string;
    document_number: string;
    interest: {
      days: number;
      type: string;
      amount: number;
    };
    fine: {
      days: number;
      type: string;
      amount: number;
    };
  };
  voucher: {
    statement_descriptor: string;
    card: Card;
    card_id?: string;
    card_token?: string;
    "card.holder_document": string;
  };
  bank_transfer: {
    bank: string;
  };
}

type PaymentMethod = keyof PaymentMethods;

type Payment<T extends PaymentMethod = PaymentMethod> = {
  payment_method?: T;
  amount?: number;
} & (T extends "boleto" ? { boleto: PaymentMethods[T] } : {}) &
  (T extends "credit_card" ? { credit_card: PaymentMethods[T] } : {}) &
  (T extends "Pix" ? { Pix: PaymentMethods[T] } : {}) &
  (T extends "voucher" ? { voucher: PaymentMethods[T] } : {}) &
  (T extends "bank_transfer" ? { bank_transfer: PaymentMethods[T] } : {}) &
  (T extends "cash" ? { cash: PaymentMethods[T] } : {});

type AddCharge<T extends PaymentMethod = PaymentMethod> = T extends "boleto"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { boleto: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : T extends "credit_card"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { credit_card: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : T extends "cash"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { cash: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : T extends "Pix"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { Pix: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : T extends "voucher"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { voucher: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : T extends "bank_transfer"
  ? {
      order_id: string;
      amount: number;
      payment?: Payment<T> & { bank_transfer: PaymentMethods[T] };
      due_at?: string;
      customer_id?: string;
      customer?: Customer;
      metadata?: {
        [key: string]: string;
      };
    }
  : never;

export type AddChargeRequest = AddCharge;
