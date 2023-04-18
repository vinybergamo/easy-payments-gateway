import { AxiosInstance } from "axios";
import { AddItemRequest } from "./types/request";
import { AddItemReponse } from "./types/response";

interface IItem {
  add(body: AddItemRequest): Promise<AddItemReponse>;
}

export class Item implements IItem {
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
}
