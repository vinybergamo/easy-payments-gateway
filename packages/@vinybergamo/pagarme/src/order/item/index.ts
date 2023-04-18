import { AxiosInstance } from "axios";
import { AddItemRequest } from "./types/request";
import { AddItemReponse, RemoveItemResponse } from "./types/response";

interface Item {
  add(body: AddItemRequest): Promise<AddItemReponse>;
  remove(item_id: string): Promise<RemoveItemResponse>;
}

class item implements Item {
  constructor(
    private readonly api: AxiosInstance,
    private readonly order_id: string
  ) {
    this.api = api;
    this.order_id = order_id;
  }

  public async add(body: AddItemRequest): Promise<AddItemReponse> {
    try {
      const { data } = await this.api.post(
        `/orders/${this.order_id}/items`,
        body
      );
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public async remove(item_id: string): Promise<RemoveItemResponse> {
    try {
      const { data } = await this.api.delete(
        `/orders/${this.order_id}/items/${item_id}`
      );
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

export { item as Item };
