import { View, Text, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { useLocationStore } from "@/store";

const Payment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { userAddress, destinationAddress } = useLocationStore();
  const [success, setSuccess] = useState(false);

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

      }
    } else {

    }
  };

  const confirmHandler = async (paymentSheetResult) => {
    setSuccess(true);
    console.log(paymentSheetResult);
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
