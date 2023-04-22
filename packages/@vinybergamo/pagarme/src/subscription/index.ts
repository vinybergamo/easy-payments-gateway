import { AxiosInstance } from "axios";
import { LooseRequest, WithPlanRequest } from "./types/request/create";
import { LooseResponse, WithPlanResponse } from "./types/response/create";
import { GetAllSubscriptionsParams } from "./types/request/get";
import { GetAllSubscriptionsResponse } from "./types/response/get";

interface Subscription {
  create: {
    loose: <T = LooseResponse>(body: LooseRequest) => Promise<T>;
    withPlan: <T = WithPlanResponse>(body: WithPlanRequest) => Promise<T>;
  };
  get: {
    all: <T = GetAllSubscriptionsResponse>(
      params?: GetAllSubscriptionsParams
    ) => Promise<T>;
    one: <T = any>(subscription_id: string) => Promise<T>;
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

  public get get() {
    const all = async <T = GetAllSubscriptionsResponse>(
      params?: GetAllSubscriptionsParams
    ): Promise<T> => {
      try {
        const { data } = await this.api.get<T>("/subscriptions", {
          params,
        });

        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    const one = async <T = any>(subscription_id: string): Promise<T> => {
      try {
        const { data } = await this.api.get<T>(
          `/subscriptions/${subscription_id}`
        );
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

export { subscription as Subscription };
