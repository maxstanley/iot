FROM node:12.18.4-alpine3.12

WORKDIR /usr/src/app/

COPY package*.json ./
RUN yarn install --frozen-lockfile

COPY src/ src/

EXPOSE 3000
CMD ["node", "src/index.js"]
