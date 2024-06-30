FROM node:20-alpine

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

RUN ["npm", "run", "dev"]