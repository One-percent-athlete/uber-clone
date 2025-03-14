import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
