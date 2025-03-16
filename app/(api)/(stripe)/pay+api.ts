import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.json();
  const { payment_methods_id, payment_itent_id, customer_id } = body;
  if (!payment_methods_id || !payment_itent_id || !customer_id) {
    return new Response(
      JSON.stringify({
        error: "Please enter a valid email address",
        status: 400,
      }),
    );
  }
}