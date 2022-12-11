FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
COPY . .

RUN yarn
RUN yarn build

EXPOSE 3800

CMD yarn start
