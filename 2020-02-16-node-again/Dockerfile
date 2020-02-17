FROM node:alpine3.11
WORKDIR /myapp
COPY package.json package.json
COPY . /myapp
RUN npm install

CMD ["npm", "start"]