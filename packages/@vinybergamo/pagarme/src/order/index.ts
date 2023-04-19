import { AxiosInstance } from "axios";
import { Item } from "./item";
import { AddCharge } from "./types/addCharge";
import { Find } from "./types/find";

interface Order {
  find(param?: Find): Promise<any>;
  create(body: any): Promise<any>;
  close(
    order_id: string,
    body: {
      status: "paid" | "canceled" | "failed";
    }
  ): Promise<any>;
  addCharge(body: AddCharge): Promise<any>;
  item(order_id: string): Item;
}

class order implements Order {
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

  public async create(body: any): Promise<any> {
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

export { order as Order };
