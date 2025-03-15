import { View, Text, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { useLocationStore } from "@/store";

const Payment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);

  const confirmHandler = async (paymentMethod, _, intentCreationCallback) => {
    
    const { paymentIntent, customer } = await fetchAPI("/(api)/(stripe)/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            name: fullName
        )
    })
  };

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
