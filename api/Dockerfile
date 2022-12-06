FROM node:16-alpine

WORKDIR /app

COPY . .

COPY package.json .

RUN npm install

RUN npm install -g typescript

RUN npm i -g sequelize-cli

EXPOSE 5000

CMD ["sh", "-c","--","echo 'started';while true; do sleep 1000; done"]
