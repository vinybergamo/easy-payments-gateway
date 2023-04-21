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
    const errors = [];
    const validPaymentMethods = [
      "credit_card",
      "boleto",
      "voucher",
      "bank_transfer",
      "safety_pay",
      "checkout",
      "cash",
      "pix",
    ];

    function validateCustomer() {
      if (!body.customer.name) errors.push("customer.name is required");

      if (!body.customer.document) errors.push("customer.document is required");

      if (!body.customer.phones) errors.push("customer.phones is required");
      else {
        const { home_phone, mobile_phone } = body.customer.phones;
        if (!home_phone && !mobile_phone)
          errors.push(
            "customer.phones.mobile_phone or customer.phones.home_phone is required"
          );
      }
    }

    function validateItems() {
      if (!body.items) errors.push("items is required");

      if (body.items.length < 1)
        errors.push("items must have at least one item");

      body.items.forEach((item, index) => {
        if (!item.description)
          errors.push(`items[${index}].description is required`);

        if (!item.amount) errors.push(`items[${index}].amount is required`);

        if (!item.code) errors.push(`items[${index}].code is required`);

        if (!item.quantity) errors.push(`items[${index}].quantity is required`);
      });
    }

    function validatePayments() {
      if (body.payments.length < 1)
        errors.push("payments must have at least one payment");

      body.payments.map((payment, index) => {
        if (
          payment.payment_method &&
          !validPaymentMethods.includes(payment.payment_method)
        )
          errors.push(
            `payments[${index}].payment_method is invalid. Valid payment methods: ${validPaymentMethods.join(
              ", "
            )} Received ${payment.payment_method}`
          );

        if (!payment.amount)
          errors.push(`payments[${index}].amount is required`);

        if (payment.payment_method === "pix") {
          if (payment.Pix.expires_at && payment.Pix.expires_in)
            errors.push(
              `payments[${index}].Pix.expires_in and payments[${index}].Pix.expires_at cannot coexist`
            );

          if (!payment.Pix.expires_at && !payment.Pix.expires_in)
            errors.push(
              `payments[${index}].Pix.expires_in or payments[${index}].Pix.expires_at is required`
            );
        }
      });
    }

    if (!body.customer) errors.push("customer is required");
    else validateCustomer();

    if (!body.items) errors.push("items is required");
    else validateItems();

    if (!body.payments) errors.push("payments is required");
    else validatePayments();

    if (errors.length > 0) throw new Error(errors.join(", "));

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
