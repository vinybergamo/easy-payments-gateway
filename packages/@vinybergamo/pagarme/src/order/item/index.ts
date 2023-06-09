import { AxiosInstance } from "axios";
import { AddItemRequest } from "./types/request";
import {
  AddItemResponse,
  GetItemResponse,
  RemoveItemResponse,
} from "./types/response";

interface Item {
  add<T = AddItemResponse>(body: AddItemRequest): Promise<T>;
  remove<T = RemoveItemResponse>(item_id: string): Promise<T>;
  get<T = GetItemResponse>(item_id: string): Promise<T>;
}

class item implements Item {
  constructor(
    private readonly api: AxiosInstance,
    private readonly order_id: string
  ) {
    this.api = api;
    this.order_id = order_id;
  }

  public async add<T = AddItemResponse>(body: AddItemRequest): Promise<T> {
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

  public async removeAll<T>(): Promise<T> {
    try {
      const { data } = await this.api.delete<T>(
        `/orders/${this.order_id}/items`
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async get<T = GetItemResponse>(item_id: string): Promise<T> {
    try {
      const { data } = await this.api.get<T>(
        `/orders/${this.order_id}/items/${item_id}`
      );

      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export { item as Item };
