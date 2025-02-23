import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.YOUR_DATABASE_URL);

const posts = await sql("SELECT * FROM posts");