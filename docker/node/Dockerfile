FROM node:19-bullseye

WORKDIR /app

COPY config/node/frontend/package.json .
RUN npm install

COPY config/node/frontend .

CMD ["npm","start"]
