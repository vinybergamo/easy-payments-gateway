import { AxiosInstance } from "axios";
import { AddItemRequest } from "./types/request";
import { AddItemReponse, RemoveItemResponse } from "./types/response";

interface Item {
  add<T = AddItemRequest>(body: AddItemRequest): Promise<T>;
  remove<T = RemoveItemResponse>(item_id: string): Promise<T>;
}

class item implements Item {
  constructor(
    private readonly api: AxiosInstance,
    private readonly order_id: string
  ) {
    this.api = api;
    this.order_id = order_id;
  }

  public async add<T = AddItemReponse>(body: AddItemRequest): Promise<T> {
    try {
      const { data } = await this.api.post<T>(
        `/orders/${this.order_id}/items`,
        body
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async remove<T = RemoveItemResponse>(item_id: string): Promise<T> {
    try {
      const { data } = await this.api.delete<T>(
        `/orders/${this.order_id}/items/${item_id}`
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export { item as Item };
