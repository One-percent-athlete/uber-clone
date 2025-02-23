import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
  const sql = neon(`{process.env.YOUR_DATABASE_URL}`);
  const {name, email, clerkId } = await request.json()
  try {
  } catch (error) {}
}