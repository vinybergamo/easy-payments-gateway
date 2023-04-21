import { AxiosInstance } from "axios";
import { LooseRequest, WithPlanRequest } from "./types/request/create";
import { LooseResponse, WithPlanResponse } from "./types/response/create";

interface Subscription {
  create: {
    loose: <T = LooseResponse>(body: LooseRequest) => Promise<T>;
    withPlan: <T = WithPlanResponse>(body: WithPlanRequest) => Promise<T>;
  };
}

class subscription implements Subscription {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public get create() {
    const loose = async <T = LooseResponse>(body: LooseRequest): Promise<T> => {
      try {
        const { data } = await this.api.post<T>("/subscriptions", body);
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    const withPlan = async <T = WithPlanResponse>(
      body: WithPlanRequest
    ): Promise<T> => {
      try {
        const { data } = await this.api.post<T>("/subscriptions", body);
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    return {
      loose,
      withPlan,
    };
  }
}

export { subscription as Subscription };
