import { AxiosInstance } from "axios";
import { AddDiscountReponse, addDiscountRequest } from "./types";
import { RemoveDiscountReponse } from "./types/response/remove";

interface Discount {
  add: <T = AddDiscountReponse>(body: addDiscountRequest) => Promise<T>;
  remove: <T = RemoveDiscountReponse>(discount_id: string) => Promise<T>;
}

class discount implements Discount {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance, private readonly subscription_id: string) {
    this.api = api;
    this.subscription_id = subscription_id;
  }

  public async add<T = AddDiscountReponse>(
    body: addDiscountRequest
  ): Promise<T> {
    try {
      const { data } = await this.api.post<T>(
        `/subscriptions/${this.subscription_id}/discounts`,
        body
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async remove<T = RemoveDiscountReponse>(
    discount_id: string
  ): Promise<T> {
    try {
      const { data } = await this.api.delete<T>(
        `/subscriptions/${this.subscription_id}/discounts/${discount_id}`
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export { discount as Discount };
