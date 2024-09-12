import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { env } from "../env"; // O env validado com Zod

// Inicialize o dotenv no arquivo principal ou aqui, se necessário
import dotenv from "dotenv";
dotenv.config();

// Agora use a variável de ambiente validada
export const client = postgres(env.DATABASE_URL); // Usa a URL do banco validada
export const db = drizzle(client, { schema, logger: true });
