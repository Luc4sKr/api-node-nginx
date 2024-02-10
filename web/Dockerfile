FROM node:21.5.0-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY ./index.js ./
CMD ["npm","start"]