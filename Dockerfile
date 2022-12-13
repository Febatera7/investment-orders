FROM node:14.20.1

WORKDIR /usr/app

COPY package.json ./
COPY tsconfig.json ./
COPY dist ./
COPY . .

RUN yarn

EXPOSE 3800

CMD yarn start
