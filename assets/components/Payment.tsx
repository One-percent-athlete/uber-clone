import { View, Text } from "react-native";
import CustomButton from "./CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { stripePublishableKey } from "@/config";



const Payment = () => {

  export default function CheckoutScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const fetchPaymentSheetParams = async () => {
      const response = await fetch(
        "https://api.stripe.com/v1/payment_intents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${stripePublishableKey}`,
          },
          body: JSON.stringify({
            payment_method_types: ["card"],
            amount: 1099,
            currency: "usd",
          }),
        },
      );
      const { clientSecret } = await response.json();
      return clientSecret;
    };
    const openPaymenSheet = async () => {
      console.log("Payment Sheet Opened");
      const clientSecret = await fetchPaymentSheetParams();
    };

    return (
      <>
        <CustomButton
          title="Confirm Ride"
          className="my-10"
          onPress={openPaymenSheet}
        />
      </>
    );
  }
};

export default Payment;
