import { AxiosInstance } from "axios";
import { Item } from "./item";
import { Find } from "./types/find";
import {
  AddChargeResponse,
  CloseResponse,
  CreateResponse,
  OrderResponse,
  OrdersResponse,
} from "./types/response";
import { CloseRequest, CreateRequest, AddChargeRequest } from "./types/request";

interface Order {
  find: {
    one<T = OrderResponse>(order_id: string): Promise<T>;
    all<T = OrdersResponse>(param?: Find): Promise<T>;
  };
  create<T = CreateResponse>(body: any): Promise<T>;
  close<T = CloseResponse>(order_id: string, body: CloseRequest): Promise<T>;
  addCharge<T = AddChargeResponse>(body: AddChargeRequest): Promise<T>;
  item(order_id: string): Item;
}

class order implements Order {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public get find() {
    const one = async <T = OrderResponse>(order_id: string): Promise<T> => {
      try {
        const { data } = await this.api.get<T>(`/orders/${order_id}`);
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    const all = async <T = OrdersResponse>(param?: Find): Promise<T> => {
      if (typeof param === "object")
        try {
          const { data } = await this.api.get<T>("/orders", {
            params: param,
          });
          return data;
        } catch (error: any) {
          return error.response.data;
        }

      try {
        const { data } = await this.api.get<T>("/orders");
        return data;
      } catch (error: any) {
        return error.response.data;
      }
    };

    return {
      one,
      all,
    };
  }

  public async create<T = CreateResponse>(body: CreateRequest): Promise<T> {
    try {
      const { data } = await this.api.post<T>("/orders", body);
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async close<T = CloseResponse>(
    order_id: string,
    body: CloseRequest
  ): Promise<T> {
    try {
      const { data } = await this.api.patch<T>(
        `/orders/${order_id}/closed`,
        body
      );
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async addCharge<T = AddChargeResponse>(
    body: AddChargeRequest
  ): Promise<T> {
    try {
      const { data } = await this.api.post<T>("/charges", body);
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public item(order_id: string): Item {
    return new Item(this.api, order_id);
  }
}

export { order as Order };
