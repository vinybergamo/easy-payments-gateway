import { Pagarme } from "../src";
import { Order, Orders } from "../src/order/types";

describe("Orders", () => {
  const gateway = new Pagarme({
    secret_key: process.env.PAGARME_SECRET_KEY_TEST!,
  });

  it("should list all orders", async () => {
    const orders: Orders = await gateway.orders.find();

    await gateway.orders.item("or_b7BxPrVsBLSEP6nz").add({
      amount: 1000,
      description: "Teste2",
      quantity: 1,
    });

    expect(orders).toBeInstanceOf(Object);
    expect(orders).toHaveProperty("data");

    expect(orders.data).not.toBeNull();
    expect(orders.data).toBeInstanceOf(Array);
    expect(orders.data[0]).toHaveProperty("id");
    expect(orders.data[0]).toHaveProperty("code");
    expect(orders.data[0]).toHaveProperty("amount");
    expect(orders.data[0]).toHaveProperty("currency");
    expect(orders.data[0]).toHaveProperty("closed");
    expect(orders.data[0]).toHaveProperty("status");
    expect(orders.data[0]).toHaveProperty("created_at");
    expect(orders.data[0]).toHaveProperty("updated_at");

    expect(orders.data[0]).toHaveProperty("items");
    expect(orders.data[0].items).toBeInstanceOf(Array);
    expect(orders.data[0].items[0]).toHaveProperty("id");
    expect(orders.data[0].items[0]).toHaveProperty("type");
    expect(orders.data[0].items[0]).toHaveProperty("description");
    expect(orders.data[0].items[0]).toHaveProperty("amount");
    expect(orders.data[0].items[0]).toHaveProperty("quantity");
    expect(orders.data[0].items[0]).toHaveProperty("status");
    expect(orders.data[0].items[0]).toHaveProperty("created_at");
    expect(orders.data[0].items[0]).toHaveProperty("updated_at");

    expect(orders.data[0]).toHaveProperty("customer");
    expect(orders.data[0].customer).toBeInstanceOf(Object);
    expect(orders.data[0].customer).toHaveProperty("id");
    expect(orders.data[0].customer).toHaveProperty("name");
    expect(orders.data[0].customer).toHaveProperty("email");
    expect(orders.data[0].customer).toHaveProperty("document");
    expect(orders.data[0].customer).toHaveProperty("document_type");
    expect(orders.data[0].customer).toHaveProperty("delinquent");
    expect(orders.data[0].customer).toHaveProperty("updated_at");
    expect(orders.data[0].customer).toHaveProperty("created_at");
    expect(orders.data[0].customer).toHaveProperty("phones");
    expect(orders.data[0].customer.phones).toHaveProperty("mobile_phone");
    expect(orders.data[0].customer.phones.mobile_phone).toBeInstanceOf(Object);
    expect(orders.data[0].customer.phones.mobile_phone).toHaveProperty(
      "country_code"
    );
    expect(orders.data[0].customer.phones.mobile_phone).toHaveProperty(
      "number"
    );
    expect(orders.data[0].customer.phones.mobile_phone).toHaveProperty(
      "area_code"
    );

    if (orders.data[0].charges) {
      expect(orders.data[0]).toHaveProperty("charges");
      expect(orders.data[0].charges).toBeInstanceOf(Array);
      expect(orders.data[0].charges[0]).toHaveProperty("id");
      expect(orders.data[0].charges[0]).toHaveProperty("code");
      expect(orders.data[0].charges[0]).toHaveProperty("amount");
      expect(orders.data[0].charges[0]).toHaveProperty("status");
      expect(orders.data[0].charges[0]).toHaveProperty("currency");
      expect(orders.data[0].charges[0]).toHaveProperty("payment_method");
      expect(orders.data[0].charges[0]).toHaveProperty("created_at");
      expect(orders.data[0].charges[0]).toHaveProperty("updated_at");

      expect(orders.data[0].charges[0]).toHaveProperty("customer");
      expect(orders.data[0].charges[0].customer).toBeInstanceOf(Object);
      expect(orders.data[0].charges[0].customer).toHaveProperty("id");
      expect(orders.data[0].charges[0].customer).toHaveProperty("name");
      expect(orders.data[0].charges[0].customer).toHaveProperty("email");
      expect(orders.data[0].charges[0].customer).toHaveProperty("document");
      expect(orders.data[0].charges[0].customer).toHaveProperty(
        "document_type"
      );
      expect(orders.data[0].charges[0].customer).toHaveProperty("delinquent");
      expect(orders.data[0].charges[0].customer).toHaveProperty("created_at");
      expect(orders.data[0].charges[0].customer).toHaveProperty("updated_at");

      expect(orders.data[0].charges[0].customer).toHaveProperty("phones");
      expect(orders.data[0].charges[0].customer.phones).toBeInstanceOf(Object);
      expect(orders.data[0].charges[0].customer.phones).toHaveProperty(
        "mobile_phone"
      );
      expect(
        orders.data[0].charges[0].customer.phones.mobile_phone
      ).toBeInstanceOf(Object);
      expect(
        orders.data[0].charges[0].customer.phones.mobile_phone
      ).toHaveProperty("country_code");
      expect(
        orders.data[0].charges[0].customer.phones.mobile_phone
      ).toHaveProperty("number");
      expect(
        orders.data[0].charges[0].customer.phones.mobile_phone
      ).toHaveProperty("area_code");
    }

    expect(orders).toHaveProperty("paging");
    expect(orders.paging).toHaveProperty("total");
  });

  it("Should list a order", async () => {
    const order: Order = await gateway.orders.find(
      process.env.PAGARME_ORDER_ID
    );

    expect(order).not.toBeNull();
    expect(order).toBeInstanceOf(Object);
    expect(order).toHaveProperty("id");
    expect(order).toHaveProperty("code");
    expect(order).toHaveProperty("amount");
    expect(order).toHaveProperty("currency");
    expect(order).toHaveProperty("closed");
    expect(order).toHaveProperty("status");
    expect(order).toHaveProperty("created_at");
    expect(order).toHaveProperty("updated_at");

    expect(order).toHaveProperty("items");
    expect(order.items).toBeInstanceOf(Array);
    expect(order.items[0]).toHaveProperty("id");
    expect(order.items[0]).toHaveProperty("type");
    expect(order.items[0]).toHaveProperty("description");
    expect(order.items[0]).toHaveProperty("amount");
    expect(order.items[0]).toHaveProperty("quantity");
    expect(order.items[0]).toHaveProperty("status");
    expect(order.items[0]).toHaveProperty("created_at");
    expect(order.items[0]).toHaveProperty("updated_at");

    expect(order).toHaveProperty("customer");
    expect(order.customer).toBeInstanceOf(Object);
    expect(order.customer).toHaveProperty("id");
    expect(order.customer).toHaveProperty("name");
    expect(order.customer).toHaveProperty("email");
    expect(order.customer).toHaveProperty("document");
    expect(order.customer).toHaveProperty("document_type");
    expect(order.customer).toHaveProperty("type");
    expect(order.customer).toHaveProperty("delinquent");
    expect(order.customer).toHaveProperty("created_at");
    expect(order.customer).toHaveProperty("updated_at");

    expect(order.customer).toHaveProperty("phones");
    expect(order.customer.phones).toBeInstanceOf(Object);

    expect(order.customer.phones).toHaveProperty("mobile_phone");
    expect(order.customer.phones.mobile_phone).toBeInstanceOf(Object);
    expect(order.customer.phones.mobile_phone).toHaveProperty("country_code");
    expect(order.customer.phones.mobile_phone).toHaveProperty("number");
    expect(order.customer.phones.mobile_phone).toHaveProperty("area_code");

    expect(order).toHaveProperty("charges");
    expect(order.charges).toBeInstanceOf(Array);
    expect(order.charges[0]).toHaveProperty("id");
    expect(order.charges[0]).toHaveProperty("code");
    expect(order.charges[0]).toHaveProperty("amount");
    expect(order.charges[0]).toHaveProperty("status");
    expect(order.charges[0]).toHaveProperty("currency");
    expect(order.charges[0]).toHaveProperty("payment_method");
    expect(order.charges[0]).toHaveProperty("created_at");
    expect(order.charges[0]).toHaveProperty("updated_at");

    expect(order.charges[0]).toHaveProperty("customer");
    expect(order.charges[0].customer).toBeInstanceOf(Object);
    expect(order.charges[0].customer).toHaveProperty("id");
    expect(order.charges[0].customer).toHaveProperty("name");
    expect(order.charges[0].customer).toHaveProperty("email");
    expect(order.charges[0].customer).toHaveProperty("document");
    expect(order.charges[0].customer).toHaveProperty("document_type");
    expect(order.charges[0].customer).toHaveProperty("type");
    expect(order.charges[0].customer).toHaveProperty("delinquent");
    expect(order.charges[0].customer).toHaveProperty("created_at");
    expect(order.charges[0].customer).toHaveProperty("updated_at");

    expect(order.charges[0].customer).toHaveProperty("phones");
    expect(order.charges[0].customer.phones).toBeInstanceOf(Object);

    expect(order.charges[0].customer.phones).toHaveProperty("mobile_phone");
    expect(order.charges[0].customer.phones.mobile_phone).toBeInstanceOf(
      Object
    );
    expect(order.charges[0].customer.phones.mobile_phone).toHaveProperty(
      "country_code"
    );
    expect(order.charges[0].customer.phones.mobile_phone).toHaveProperty(
      "number"
    );
    expect(order.charges[0].customer.phones.mobile_phone).toHaveProperty(
      "area_code"
    );

    expect(order.charges[0]).toHaveProperty("last_transaction");
    expect(order.charges[0].last_transaction).toBeInstanceOf(Object);
    expect(order.charges[0].last_transaction).toHaveProperty("expires_at");
    expect(order.charges[0].last_transaction).toHaveProperty("id");
    expect(order.charges[0].last_transaction).toHaveProperty(
      "transaction_type"
    );
    expect(order.charges[0].last_transaction).toHaveProperty("amount");
    expect(order.charges[0].last_transaction).toHaveProperty("status");
    expect(order.charges[0].last_transaction).toHaveProperty("success");
    expect(order.charges[0].last_transaction).toHaveProperty("created_at");
    expect(order.charges[0].last_transaction).toHaveProperty("updated_at");
  });
});
