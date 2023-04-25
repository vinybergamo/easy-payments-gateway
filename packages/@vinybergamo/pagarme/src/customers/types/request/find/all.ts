interface GetCustomersClients {
  name?: string;
  document?: string;
  email?: string;
  gender?: string;
  page?: number;
  size?: number;
  code?: string;
}

export type GetAllCustomersRequest = GetCustomersClients;
