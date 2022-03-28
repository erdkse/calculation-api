

FROM node:16.6.2-bullseye-slim AS builder

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm i --quiet && npm run build

FROM node:16.6.2-bullseye-slim

WORKDIR /app

ENV NODE_ENV=prod

COPY --from=builder /usr/app/dist ./

RUN npm i --quiet --only=production

CMD ["node", "src/main.js"]