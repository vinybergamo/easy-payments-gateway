import { AxiosInstance } from "axios";
import { GetAllCustomersRequest } from "./types/request/find/all";
import {
  GetAllClientsResponse,
  GetOneCustomerResponse,
} from "./types/response/find";
import { CreateCustomerRequest } from "./types/request";
import { CreateCustomerResponse } from "./types/response";

interface Customers {
  find: {
    all<T = GetAllClientsResponse>(params?: GetAllCustomersRequest): Promise<T>;
    one<T = GetOneCustomerResponse>(customer_id: string): Promise<T>;
  };
  create<T = CreateCustomerResponse>(body: CreateCustomerRequest): Promise<T>;
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

  public async create<T = CreateCustomerResponse>(
    body: CreateCustomerRequest
  ): Promise<T> {
    try {
      const { data } = await this.api.post<T>("/customers", body);
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export { customers as Customers };
