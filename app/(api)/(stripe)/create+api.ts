import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, amount } = body;
  if (!name || !email || !amount) {
    return new Response(
      JSON.stringify({
        error: "Please enter a valid email address",
        status: 400,
      }),
    );
  }

  let customer;

  const existingCustomer = await stripe.customers.list({ email });

  if (existingCustomer.data.length > 0) {
    customer = existingCustomer.data[0];
  } else {
    const newCustomer = await stripe.customers.create({
      name,
      email,
    });
    customer = newCustomer;
  }

  const ephemeraKey = await stripe.ephemeraKeys.create(
    { customer: customer.id },
    { apiVersion: "2020-08-07" },
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(amount) ** 100,
    currency: "eur",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never"
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeraKey: ephemeraKey.secret,
    customer: customer.id
  });
}

app.post("/create-intent", async (req, res) => {
  try {
    var args = {
      amount: 1099,
      currency: "usd",
      automatic_payment_method: { enable: true },
    };

    const intent = await stripe.paymentIntents.create(args);
    res.json({
      client_secret: intent.client_secret,
    });
  } catch (err) {
    res.status(err.statusCode).json({ error: err.message });
  }
});
