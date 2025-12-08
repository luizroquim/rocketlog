import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// Pega a URL do banco do arquivo .env
const connectionString = `${process.env.DATABASE_URL}`;

//Configura o Pool de conexões do Postgres (pg)
const pool = new Pool({ connectionString });

//Cria o adaptador do Prisma
const adapter = new PrismaPg(pool);

// Instancia o PrismaClient passando o adapter E mantendo seu log
export const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "production" ? [] : ["query"],
});
