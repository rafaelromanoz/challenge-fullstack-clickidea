# Challenge ClickIdea

Quadro kanban criado para o desafio da vaga de desenvolvedor web fullstack na ClickIdeia, aplicação fullstack onde pode-se adicionar,deletar e arrastar cards.

## 🚀 Começando

- `git clone https://github.com/clickideia/desafio-tecnico-fullstack.git`

### 📋 Pré-requisitos

O projeto possui o client (frontend react) e o banco de dados Dockerizado, não foi possível fazer o backend dockerizado por estar utilizando o ORM Sequelize.

```
docker-compose up
```

Após rodar esse comando rode esses na sequencia:

```
cd api
```
Depois

```
npm install
```
Depois

```
npm start
```

### Atenção!!

É necessário apagar o -dev do .env para conseguir utilizar as variáveis de ambiente no projeto

#### Rodando projeto com os containers 

Após os containers estarem prontos o projeto estará disponível na url

```
http://localhost:3000/
```

### 🔧 Instalação

Para executar o projeto sem o Docker, é necessário seguir os passos abaixo:

#### Instalando dependencias do backend.
```
cd backend
npm install
```
#### Instalando dependencias do frontend.
```
cd frontend
npm install
```
#### Executando o servidor

```
cd backend
npm start
```

#### Executando cliente React

```
cd frontend
npm start
```


## 📦 Desenvolvimento

No desenvolvimento da API (api) foi utilizada da arquitetura MSC, Models, Services, Controller, no service estão as regras de negócio, controller estão as requisições.

No backend foi utilizado TypeScript.

A aplicação foi criado utilizando(Sequelize (ORM), MySql, Express, React, Node)

Para confecção da API foi utilizado do framework Express e Node.js.

No frontend foi utilizado do framework react na interação com o usuário, e para estilização foi utilizado a biblioteca CSS, Styled Components React.

Para padronização e qualidade de código foi utilizado o ESLint e o editorconfig.

### Observações


Como descrito no readme proposto pela ClickIdeia não consegui fazer o projeto 100% dockerizado, não consegui rodar as migrations dentro do container por isso dockerizei somente o front e o banco de dados.

Mas já estou curioso e vou conseguir rodar isso posteriormente.

Tive dificuldade em algumas partes do react mas estudei e me dediquei bastante, tentei meu máximo e consegui resolver a maioria, foi um teste bem divertido!

## 🛠️ Construído com

* [JavaScript](javascript.com) - Linguagem
* [TypeScript](https://www.typescriptlang.org/) - Linguagem backend
* [MySQL](https://www.mysql.com/) - Banco de Dados
* [Express](https://expressjs.com/pt-br/) - Criação API
* [Node.js](https://nodejs.org/en/) - Criação API
* [Docker](https://nodejs.org/en/) - Container MySQL
* [ESLint](https://eslint.org/) - Padronização e qualidade de código
* [Sequelize](https://sequelize.org/) - Mapeamento objeto relacional
* [Joi](https://joi.dev/api/?v=17.6.0) - Validações das informações requests.
* [StyledComponents](https://styled-components.com/) - Componentização e estilização

