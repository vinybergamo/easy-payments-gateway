import { AxiosInstance } from "axios";
import { Item } from "./item";
import { AddCharge } from "./types/addCharge";
import { CreateOrder } from "./types/create";
import { Find } from "./types/find";

interface IOrder {
  find(param?: Find): Promise<any>;
  create(body: CreateOrder): Promise<any>;
  close(
    order_id: string,
    body: {
      status: "paid" | "canceled" | "failed";
    }
  ): Promise<any>;
  addCharge(body: AddCharge): Promise<any>;
  item(order_id: string): Item;
}

export class Order implements IOrder {
  private readonly api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async find(param?: Find): Promise<any> {
    if (typeof param === "string")
      try {
        const { data } = await this.api.get(`/orders/${param}`);
        return data;
      } catch (error: any) {
        return error;
      }

    if (typeof param === "object")
      try {
        const { data } = await this.api.get("/orders", {
          params: param,
        });
        return data;
      } catch (error: any) {
        return error;
      }

    try {
      const { data } = await this.api.get("/orders");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public async create(body: CreateOrder): Promise<any> {
    try {
      const { data } = await this.api.post("/orders", body);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public async close(
    order_id: string,
    body: {
      status: "paid" | "canceled" | "failed";
    }
  ): Promise<any> {
    try {
      const { data } = await this.api.put(`/orders/${order_id}/closed`, body);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public async addCharge(body: AddCharge): Promise<any> {
    try {
      const { data } = await this.api.post("/charges", body);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  public item = (order_id: string): Item => {
    return new Item(this.api, order_id);
  };
}
