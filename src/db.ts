// import { neon } from "@neondatabase/serverless";
// import {DATABASE_URL} from ".env"
// export const sql = neon(process.env.DATABASE_URL!);

// import { drizzle } from 'drizzle-orm/neon-http';
// const db = drizzle(process.env.DATABASE_URL);
// const result = await db.execute('select 1');

import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL!);
