FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock

RUN yarn install --production

COPY . .

RUN ["yarn", "build"]

CMD ["yarn", "start"]
