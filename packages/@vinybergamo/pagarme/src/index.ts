import axios, { AxiosInstance } from "axios";
import { Order } from "./order";
import { Webhook } from "./webhook";
import { Subscription } from "./subscription";
import { Plans } from "./plans";

interface Client {
  secret_key: string;
  account_id?: string;
  public_key?: string;
  password?: string;
}

interface Pagarme {
  orders: Order;
  webhooks: Webhook;
  subscription: Subscription;
}

class pagarme implements Pagarme {
  private readonly api: AxiosInstance;
  public readonly orders: Order;
  public readonly webhooks: Webhook;
  public readonly subscription: Subscription;
  public readonly plans: Plans;

  constructor(private readonly client: Client) {
    this.client = client;

    if (!this.client.secret_key) throw new Error("Secret key is required");

    const base64Key = Buffer.from(
      `${this.client.secret_key}:${this.client.password}`
    ).toString("base64");

    this.api = axios.create({
      baseURL: "https://api.pagar.me/core/v5",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${base64Key}`,
      },
    });

    this.orders = new Order(this.api);
    this.webhooks = new Webhook(this.api);
    this.subscription = new Subscription(this.api);
    this.plans = new Plans(this.api);
  }
}

export { pagarme as Pagarme };

new pagarme({
  secret_key: "sk_test_xoNzoq0He6i5D5Or",
}).plans.create({
  billing_type: "prepaid",
  currency: "BRL",
  installments: [1],
  interval: "day",
  name: "Testando Plano pela API",
  payment_methods: ["boleto"],
  items: [
    {
      name: "Item Plan Teste",
      pricing_scheme: {
        price: 1990,
        scheme_type: "unit",
      },
      quantity: 1,
    },
  ],
  pricing_scheme: {
    price: 1990,
    scheme_type: "unit",
  },
});
