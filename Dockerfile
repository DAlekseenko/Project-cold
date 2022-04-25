FROM node:12 AS builder

MAINTAINER Dan Alekseenko <dalekseenko88@gmail.com>

WORKDIR /app

COPY package*.json ./

RUN npm i npm@latest -g
RUN npm install

COPY ./ /app

RUN npm run front-build
RUN npm run server-build
RUN rm -rf node_modules

FROM node:alpine

WORKDIR /app

COPY --from=builder ./app /app

RUN npm install --save babel-polyfill

EXPOSE 3000

ENV NODE_ENV production

CMD [ "node", "app.js" ]

