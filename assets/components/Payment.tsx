import { View, Text, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { useLocationStore } from "@/store";
import { PaymentProps } from "@/types/type";
import { fetchAPI } from "@/lib/fetch";

const Payment = ({
    fullName,
    email,
    amount,
    driverId,
    rideTime
}: PaymentProps ) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);

  const confirmHandler = async (paymentMethod, _, intentCreationCallback) => {
    
    const { paymentIntent, customer } = await fetchAPI("/(api)/(stripe)/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            name: fullName || email.split("@")[0],
            email: email,
            amount: amount,
            paymentMethodId: paymentMethod.id
        )
    })
  };

  if (paymentIntent.client_secret) {
    const { result } = await fetchAPI("/api/(stripe)/pay", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            payment_method_id: paymentMethod.id,
            payment_intent_id: paymentIntent.id
        })
    })
  }

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "RideHailing",
      intentConfigurations: {
        mode: {
          amount: 1000,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      if (error.code === PaymentSheetErrorCode.Canceled) {
        Alert.alert(`Error code : ${error.code}`, error.message);
      } else {
        setSuccess(true);
      }
    } else {
    }
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
};

export default Payment;
