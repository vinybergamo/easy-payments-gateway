interface GetOneCustomer {
  id: string;
  name: string;
  email: string;
  document: string;
  type: "individual" | "company";
  delinquent: boolean;
  created_at: string;
  updated_at: string;
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

export type GetOneCustomerResponse = GetOneCustomer | undefined;
