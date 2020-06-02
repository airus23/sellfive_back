FROM node:14.3.0-alpine3.11

WORKDIR /app

COPY . .
RUN set -ex; yarn install --prod; yarn cache clean

EXPOSE 5555

CMD ["node", "src/index.js"]
