# My Fastify App

This is a Node.js server application built with Fastify, TypeScript, and MongoDB. It serves as a template for creating RESTful APIs.

## Features

- Fast and lightweight server using Fastify
- Type-safe code with TypeScript
- MongoDB integration for data persistence

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd my-fastify-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Configuration

Before running the application, ensure that your MongoDB connection string is correctly set in the `src/services/mongo.service.ts` file.

## Running the Application

To start the server, run:

```
npm run start
```

The server will be running on `http://localhost:3000`.

## Usage

You can access the API endpoints defined in the routes. For example:

- `GET /` - Retrieves the index.
- `POST /items` - Creates a new item.

## License

This project is licensed under the MIT License.