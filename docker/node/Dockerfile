FROM node:18.0.0-alpine3.14

WORKDIR /application

COPY . /application

RUN yarn install && npm rebuild node-sass && yarn build

ENTRYPOINT ["yarn", "start"]

EXPOSE 3000