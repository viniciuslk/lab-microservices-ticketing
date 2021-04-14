FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn --only=production
COPY . .

CMD ["yarn", "start"]