interface CreateCustomer {
  name: string;
  email: string;
  document: string;
  document_type: "CPF" | "CNPJ" | "PASSPORT";
  type: "individual" | "corporation";
}

export type CreateCustomerRequest = CreateCustomer;
