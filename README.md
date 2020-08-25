<h1 align="center">Desafio 05: Primeiro projeto Node.js</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a>
</p>


## :mega: Sobre o projeto

Este desafio consistiu na criação de aplicação Nodejs + Typescript, utilizando o conceito de models, repositories e services.
Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

---


## :neckbeard: Como executar o projeto

Rotas:
- POST /transactions

A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}

- GET /transactions

Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}

### Pré-requisitos

Antes de começar, verifique em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou algum outro, de sua preferência.

#### :heavy_check_mark: Rodando o Backend

```bash

# Clone este repositório
$ git clone https://github.com/Serrante/Desafio-05-Primeiro-projeto-Node.js.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-05-Primeiro-projeto-Node.js

# Instale as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### **Server**  [NodeJS](https://nodejs.org/en/)

-   **[Typescript](https://www.typescriptlang.org/)**


> Veja o arquivo  [package.json](https://github.com/Serrante/Desafio-02-Conceitos-do-NodeJS/package.json)


#### **Utilitários**

-   Editor:  **[VSCode](https://code.visualstudio.com/)**
-   Teste de API:  **[Rest Client VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**



---
