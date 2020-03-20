FROM node:12.16.1-alpine3.11

WORKDIR /app/

COPY . .

COPY client/build .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]