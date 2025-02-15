FROM node:slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["node", "./dist/app.js"]
