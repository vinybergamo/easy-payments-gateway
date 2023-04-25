interface Data {
  id: string;
  name: string;
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

interface Paging {
  total: number;
  next?: string;
  previous?: string;
}

interface GetAllClients {
  data: Array<Data>;
  paging: Paging;
}

export type GetAllClientsResponse = GetAllClients | undefined;
