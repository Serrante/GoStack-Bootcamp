<h1 align="center">Desafio 02: Conceitos do Node.js</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a>
</p>


## :mega: Sobre o projeto

Este é o primeiro desafio em Nodejs do bootcamp da Rocketseat.
Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, 
listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

---


## :neckbeard: Como executar o projeto

Este desafio refere-se apenas ao backend, tendo como rotas:
- POST /repositories
- GET /repositories
- PUT /repositories/:id
- DELETE /repositories/:id
- POST /repositories/:id/like

### Pré-requisitos

Antes de começar, verifique em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou algum outro, de sua preferência.

#### :heavy_check_mark: Rodando o Backend

```bash

# Clone este repositório
$ git clone https://github.com/Serrante/Desafio-02-Conceitos-do-NodeJS.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-02-Conceitos-do-NodeJS

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

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Uuidv4](https://github.com/thenativeweb/uuidv4)**
-   **[Nodemon](https://github.com/remy/nodemon)**
-   **[Jest](https://github.com/facebook/jest)**


> Veja o arquivo  [package.json](https://github.com/Serrante/Desafio-02-Conceitos-do-NodeJS/package.json)


#### **Utilitários**

-   Editor:  **[VSCode](https://code.visualstudio.com/)**
-   Teste de API:  **[Rest Client VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**



---
