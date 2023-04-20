interface Item {
  amount: number;
  description: string;
  quantity: number;
  code: string;
}

type PixWithExpiresIn = {
  expires_in: number;
  expires_at?: never;
};

type PixWithExpiresAt = {
  expires_at: Date;
  expires_in?: never;
};

type PixExpiration = PixWithExpiresIn | PixWithExpiresAt;

interface Pix {
  payment_method: "pix";
  Pix: PixExpiration & {
    additional_information?: {
      Name: string;
      Value: string;
    };
  };
}

interface Cash {
  payment_method: "cash";
  cash: {
    [key: string]: string;
    description: string;
  };
}

interface BankTransfer {
  payment_method: "bank_transfer";
  bank_transfer: {
    bank: string;
  };
}

interface Boleto {
  payment_method: "boleto";
  boleto: {
    bank: string;
    instructions?: string;
    due_at?: string;
    nosso_numero?: string;
    type?: string;
    document_number?: string;
    interest?: {
      days: number;
      type: "percentual" | "flat";
      amount: number;
    };
    fine?: {
      days: number;
      type: "percentual" | "flat";
      amount: number;
    };
  };
}

type PaymentsMethods = Pix | Cash | BankTransfer | Boleto;

interface PaymentBase {
  amount: number;
}

type Payment = PaymentBase & PaymentsMethods;

interface PhoneBase {
  country_code: string;
  area_code: string;
  number: string;
}

interface PhonesWithMobilePhone {
  mobile_phone: PhoneBase;
  home_phone?: PhoneBase;
}

interface PhonesWithHomePhone {
  mobile_phone?: PhoneBase;
  home_phone: PhoneBase;
}

type Phones = PhonesWithMobilePhone | PhonesWithHomePhone;

interface Create {
  customer: {
    name: string;
    document: string;
    type: "individual" | "company";
    phones: Phones;
  };
  items: Array<Item>;
  payments: Array<Payment>;
}

export type CreateRequest = Create;
