import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"; // 1. The Translator (Adapter)
import pg from "pg";                          // 2. The Raw Cable (Driver)

// 3. You plug the raw cable into your Neon database URL
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 4. You wrap the cable with the translator
const adapter = new PrismaPg(pool);

// 5. You hand the translator to Prisma Client
export const prisma = new PrismaClient({ adapter });