FROM nodejs:alpine

WORKDIR /app/

COPY . .

RUN npm install && \
    npm install --prefix client && \
    npm run build

CMD [ "npm", "start" ]