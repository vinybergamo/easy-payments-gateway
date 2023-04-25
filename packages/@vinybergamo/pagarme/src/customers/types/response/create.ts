interface CreateCustomer {
  id: string;
  name: string;
  email: string;
  document: string;
  type: "individual" | "company";
  delinquent: boolean;
  created_at: string;
  updated_at: string;
  address?: {
    id: string;
    line_1: string;
    line_2?: string;
    zip_code: string;
    city: string;
    state: string;
    country: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  phones?: {
    mobile_phone?: {
      country_code: string;
      area_code: string;
      number: string;
    };
    home_phone?: {
      country_code: string;
      area_code: string;
      number: string;
    };
  };
}

export type CreateCustomerResponse = CreateCustomer | undefined;
