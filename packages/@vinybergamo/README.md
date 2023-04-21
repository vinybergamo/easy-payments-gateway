# @vinybergamo/pagarme

This is a library for integrating with the Pagar.me payment gateway.

## Installation

To install the library, use the npm or yarn package manager:

```bash
npm install @vinybergamo/pagarme
# or
yarn add @vinybergamo/pagarme
```

## Usage

To get started with the library, import it into your file:

```ts
import { Pagarme } from "@vinybergamo/pagarme";
```

Then, you need to configure your API credential:

```ts
const gateway = new Pagarme({
  secret_key: "YOUR_SECRET_KEY",
});
```

## Create a Order

To create a order, you can use `orders.create` method:

```ts
gateway.orders.create({
  customer: {
    name: "John Doe",
    document: "12345678900",
    type: "individual",
    phones: {
      mobile_phone: {
        country_code: "55",
        area_code: "11",
        number: "123456789",
      },
    },
  },
  items: [
    {
      description: "Cool Item",
      code: "item_code",
      amount: 990,
      quantity: 1,
    },
  ],
  payments: [
    {
      amount: 990,
      payment_method: "pix",
      Pix: {
        expires_in: 3600,
      },
    },
  ],
});
```

The method returns an object with the information of the created order.

## Retrieving a Order

To retrieve a order, you can use the `orders.find.one` method passing the order ID:

```ts
gateway.orders.find.one("ORDER_ID");
```

The method returns an object with the information of the retrieved order.

## List all Orders

To list all orders, you can use the `orders.find.all` method:

```ts
gateway.orders.find.all();
```

The method returns an object with the information of the listed orders.

## Contributing

If you wish cotribute to the library, follow the instruction below:

1. Fork this repository
2. Create a branch with feature(`git checkout -b my-feature`)
3. Commit your changes (`git commit -am 'Adding my feature'`)
4. Push to your branch (`git push origin my-feature`)
5. Open a pull request

## License

This library is licensed under the MIT license. See the LICENSE file for more information.

### MIT License

Copyright (c) 2023 [Vinybergamo](https://vinybergamo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
