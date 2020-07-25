FROM node:alpine

WORKDIR '/usr/app'

COPY package.json yarn.lock ./

RUN yarn install

COPY src/  ./src
COPY public/  ./public


CMD ["yarn", "start"]