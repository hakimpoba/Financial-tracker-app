import { z } from 'zod/mini'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import accounts from "./accounts";
import categories from "./categories";
import transactions  from './transactions';
import summary from "./summary";

const app = new Hono().basePath('/api')


// app.route("/accounts", accounts);

const routes = app
.route("/accounts", accounts)
.route("/categories", categories)
.route("/transactions", transactions)
.route("/summary", summary);


// app.use('*', clerkMiddleware())
// app
// .get(
//   '/hello',
//   // clerkMiddleware,
//   (c) => {
//     const auth = getAuth(c);

//     if(!auth?.userId){
//       return c.json({
//         error: "Unauthorized"
//       });
//     }
//   return c.json({
//     message: 'Hello Next.js!',
//     userId: auth.userId,
//   })
// })


export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;