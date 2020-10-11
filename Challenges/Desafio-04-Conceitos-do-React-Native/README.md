<h1 align="center">Desafio 04: Conceitos do React Native</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a>
</p>


## :mega: Sobre o projeto

Este é o primeiro desafio em React Native do bootcamp da Rocketseat.
Essa será uma aplicação para listar os títulos de todos os repositórios que estão cadastrados na sua API, informando os campos title e techs, possibilitando realizar curtidas no repositório.

---


## :neckbeard: Como executar o projeto

Este desafio consiste em fazer uso da API criada no desafio de NodeJS, acessando via emulador, utilizando os métodos abaixo:
- GET /repositories - Quando iniciar o yarn na abertura do emulador
- POST /repositories/:id/like - Quando clicar no botão Curtir

### Pré-requisitos

Antes de começar, verifique em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou algum outro, de sua preferência.

#### :heavy_check_mark: Rodando o Backend

```bash

# Clone este repositório
$ git clone https://github.com/Serrante/Desafio-04-Conceitos-do-React-Native.git
# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio-04-Conceitos-do-React-Native

# Instale as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento, na pasta do backend
$ npm run dev ou yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

#Execute a aplicação em modo de desenvolvimento, na pasta do mobile
$ npm start ou yarn start e npx react-native run-android

```


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### **Server**  [NodeJS](https://nodejs.org/en/) 

#### **Mobile**  [React Native](https://reactnative.dev/) 


> Veja o arquivo  [package.json](https://github.com/Serrante/Desafio-04-Conceitos-do-React-Native/package.json)


#### **Utilitários**

-   Editor:  **[VSCode](https://code.visualstudio.com/)**
-   Teste de API:  **[Rest Client VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**



---
