import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.post('/api/stripe/create', async (req, res) => {
  const { amount, currency } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
  });
  res.json({ client_secret: paymentIntent.client_secret });
});