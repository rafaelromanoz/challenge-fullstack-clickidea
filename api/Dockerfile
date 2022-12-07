FROM node:16-alpine

RUN npm install -g sequelize-cli 

RUN npm install typescript -g

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN apk update && apk add bash

CMD [ "npx sequelize-cli db:migrate", "npm start" ]

EXPOSE 5000

