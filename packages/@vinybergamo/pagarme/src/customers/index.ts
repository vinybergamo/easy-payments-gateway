import { AxiosInstance } from "axios";
import { GetAllCustomersRequest } from "./types/request/find/all";
import { GetAllClientsResponse } from "./types/response/all";

interface Customers {
  find: {
    all<T = GetAllClientsResponse>(params?: GetAllCustomersRequest): Promise<T>;
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

    return {
      all,
    };
  }
}

export { customers as Customers };
