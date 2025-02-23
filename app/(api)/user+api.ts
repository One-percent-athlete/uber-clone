import { neon } from "@neondatabase/serverless";

const sql = neon("postgresql://");

const posts = await sql("SELECT * FROM posts");