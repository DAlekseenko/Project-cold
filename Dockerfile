FROM node:8 AS base

MAINTAINER Dan Alekseenko <dalekseenko88@gmail.com>

WORKDIR /app

COPY package*.json ./

RUN npm i npm@latest -g
RUN npm install

COPY ./ /app

RUN npm run build

EXPOSE 3000

ENV NODE_ENV docker

CMD [ "node", "app.js" ]

