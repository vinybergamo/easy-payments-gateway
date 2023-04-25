import { AxiosInstance } from "axios";
import { GetAllCustomersRequest } from "./types/request/find/all";
import {
  GetAllClientsResponse,
  GetOneCustomerResponse,
} from "./types/response/find";

interface Customers {
  find: {
    all<T = GetAllClientsResponse>(params?: GetAllCustomersRequest): Promise<T>;
    one<T = GetOneCustomerResponse>(customer_id: string): Promise<T>;
  };
}

class customers implements Customers {
  constructor(private readonly api: AxiosInstance) {}

  public get find() {
    const all = async <T = GetAllClientsResponse>(
      params?: GetAllCustomersRequest
    ): Promise<T> => {
      try {
        const { data } = await this.api.get<T>("/customers", {
          params,
        });
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    const one = async <T = GetOneCustomerResponse>(
      customer_id: string
    ): Promise<T> => {
      try {
        const { data } = await this.api.get<T>(`/customers/${customer_id}`);
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    return {
      all,
      one,
    };
  }
}

export { customers as Customers };
