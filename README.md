# Easy Payments Gateway

Essa biblioteca é feita em TypeScript e tem como objetivo facilitar a conexão com diversos provedores de pagamentos, tais como Pagarme, Mercado Pago, Pagseguro, PayPal e outros.

## Instalação

Para instalar a biblioteca, basta rodar o seguinte comando no terminal:

```
npm install easy-payments-gateway
```

ou

```
yarn add easy-payments-gateway
```

## Como usar

Para utilizar a biblioteca, basta importar o gateway de pagamento que você deseja utilizar. Abaixo segue um exemplo de como utilizar o gateway da Pagarme:

```typescript
import { Pagarme } from "easy-payments-gateway";

const pagarme = new Pagarme({
  secret_key: "sua_chave_secreta",
});
```

É possível passar outras opções de configuração ao criar o objeto de gateway, dependendo do provedor que você está utilizando. Você pode verificar a documentação de cada provedor para mais detalhes.

Após criar o objeto de gateway, é possível realizar diversas operações de pagamentos, como criar uma transação, capturar uma transação, estornar uma transação, etc. Novamente, você pode verificar a documentação de cada provedor para mais detalhes sobre as operações disponíveis.

## Contribuindo

Se você gostaria de contribuir para a biblioteca, sinta-se livre para abrir uma issue ou uma pull request no repositório do GitHub da biblioteca.

## Licença

Essa biblioteca é distribuída sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Author

[Vinycios Bergamo](https://github.com/vinybergamo) | <contato@vinybergamo.com> | [Website](https://vinybergamo.com)
