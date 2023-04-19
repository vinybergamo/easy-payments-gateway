export interface Address {
  line_1: string;
  line_2?: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
  metadata?: {
    [key: string]: any;
  };
}

export interface Phone {
  mobile_phone: {
    country_code: string;
    number: string;
    area_code: string;
  };
  home_phone?: {
    country_code: string;
    number: string;
    area_code: string;
  };
}

export interface Customer {
  name: string;
  email: string;
  code?: string;
  document: string;
  document_type: "CPF" | "CNPJ" | "PASSPORT";
  type: "individual" | "company";
  address: Address;
  phones: Phone;
  birthdate?: Date;
  metadata?: {
    [key: string]: any;
  };
}

export interface Card {
  number: string;
  holder_name: string;
  holder_document: string;
  exp_month: number;
  exp_year: number;
  cvv: string;
  brand:
    | "Elo"
    | "Mastercard"
    | "Visa"
    | "Amex"
    | "JCB"
    | "Aura"
    | "Diners"
    | "Discover";
  label?: string;
  billing_address_id?: string;
  billing_address?: Address;
  options?: {
    [key: string]: any;
  };
  metadata?: {
    [key: string]: any;
  };
}
