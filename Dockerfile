# Build Stage
FROM node:slim AS build
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . /app
RUN npm run build

# Production Stage
FROM node:slim
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build .
EXPOSE 3000
CMD ["node", "app.js"]
