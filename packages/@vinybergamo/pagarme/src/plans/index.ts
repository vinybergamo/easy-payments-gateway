import { AxiosInstance } from "axios";
import { CreatePlanRequest } from "./types/request";
import { CreatePlanResponse } from "./types/response";

interface Plans {
  create<T = CreatePlanResponse>(body: CreatePlanRequest): Promise<T>;
}

class plans implements Plans {
  constructor(private readonly api: AxiosInstance) {}

  async create<T = CreatePlanResponse>(body: CreatePlanRequest): Promise<T> {
    try {
      const { data } = await this.api.post<T>("/plans", body);
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export { plans as Plans };
