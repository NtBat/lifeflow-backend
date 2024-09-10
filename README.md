# 🌊 Lifeflow

## 🚀 Overview

**Lifeflow** is a back-end service built with modern technologies, designed to provide a high-performance, scalable, and type-safe API. Lifeflow leverages the power of **Node.js**, **Fastify**, **Drizzle ORM**, and **PostgreSQL** to create a robust backend infrastructure. With **TypeScript** and **Zod** handling validation and types, it ensures both development efficiency and application safety.

## 🔧 Tech Stack

- **Node.js** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
- **Fastify** ![Fastify](https://img.shields.io/badge/Fastify-000000?style=flat&logo=fastify&logoColor=white)
- **Drizzle ORM**  ![Drizzle ORM](https://img.shields.io/badge/-Drizzle-3E67B1?style=flat&logo=drizzle&logoColor=white)
- **PostgreSQL** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
- **TypeScript** ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
- **Zod**  ![Zod](https://img.shields.io/badge/-Zod-3E67B1?style=flat&logo=zod&logoColor=white)

## ✨ Features

- **⚡ Fast and Efficient**: Built on Fastify for high-performance routing and HTTP handling.
- **📜 Type-Safe ORM**: Uses Drizzle ORM for a type-safe database layer.
- **✅ Schema Validation**: Zod ensures runtime validation of API inputs.
- **🔒 Secure**: Built-in input validation and security best practices.
- **🎯 TypeScript**: Type-safe throughout the codebase, from database queries to API responses.
- **🗃️ PostgreSQL**: A reliable and powerful relational database system.

## 📦 Installation

To run Lifeflow on your local environment, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/NtBat/lifeflow-backend
    ```

2. Install the dependencies:
   ```bash
   cd lifeflow-backend
   npm install
   docker compose up -d
    ```

3. Set up environment variables:
   ```bash
    DATABASE_URL=your_postgresql_url
    ```

4. Run database seed:
   ```bash
    npm run seed
    npx drizzle-kit migrate
    npx drizzle-kit generate
    ```

4. Run the development server:
   ```bash
    npm run dev
    ```