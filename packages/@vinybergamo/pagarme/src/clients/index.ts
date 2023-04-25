import { AxiosInstance } from "axios";
import { GetAllClientsRequest } from "./types/request/find/all";
import { GetAllClientsResponse } from "./types/response/all";

interface Clients {
  find: {
    all<T = GetAllClientsResponse>(params?: GetAllClientsRequest): Promise<T>;
  };
}

class clients implements Clients {
  constructor(private readonly api: AxiosInstance) {}

  public get find() {
    const all = async <T = GetAllClientsResponse>(
      params?: GetAllClientsRequest
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

export { clients as Clients };
