FROM node:22.13.1
WORKDIR /app
COPY package.json /app
RUN npm install && npm run build
COPY ./dist .
EXPOSE 3000
CMD ["node", "app.js"]
