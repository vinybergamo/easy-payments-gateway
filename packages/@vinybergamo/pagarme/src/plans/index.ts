import { AxiosInstance } from "axios";
import { CreatePlanRequest } from "./types/request";

interface Plans {
  create<T>(body: CreatePlanRequest): Promise<T>;
}

class plans implements Plans {
  constructor(private readonly api: AxiosInstance) {}

  async create<T>(body: CreatePlanRequest): Promise<T> {
    try {
      const { data } = await this.api.post<T>("/plans", body);
      console.log(data);

      return data;
    } catch (error: any) {
      console.log(error.response.data);

      return error.response.data;
    }
  }
}

export { plans as Plans };
