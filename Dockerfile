FROM node:12.13.1
WORKDIR /code
COPY ./package*.json /code/
COPY ./yarn.lock /code/
RUN yarn

