import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
  const sql = neon(`{process.env.YOUR_DATABASE_URL}`);
  const {name, email, clerkId } = await request.json();

  if (!name || !email || !clerkId) {
    return new Response.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  try {
  } catch (error) {}
}