import { View, Text, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { useLocationStore } from "@/store";
import { PaymentProps } from "@/types/type";
import { fetchAPI } from "@/lib/fetch";
import { useAuth } from "@clerk/clerk-expo";

const Payment = ({
    fullName,
    email,
    amount,
    driverId,
    rideTime
}: PaymentProps ) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { userId } = useAuth();
  const [success, setSuccess] = useState(false);
  const { userAddress, userLatitude, userLongitude, destinationAddress, destinationLatitude, destinationLongitude } =useLocationStore()

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
    if (paymentIntent.client_secret) {
      const { result } = await fetchAPI("/api/(stripe)/pay", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              payment_method_id: paymentMethod.id,
              payment_intent_id: paymentIntent.id,
              customer_id: customer
          })
      })
      if (result.client_secret) {
          await fetchAPI("/(api)/ride/create", {
            method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              origin_address: userAddress,
              origin_latitude: userLatitude,
              origin_longitude: userLongitude,
              destination_address: destinationAddress,
              destination_latitude: destinationLatitude,
              destination_longitude: destinationLongitude,
              ride_time = rideTime.toFixed(0),
              fare_price = parseInt(amount) * 100,
              payment_status = "paid",
              driver_id = driverId,
              user_id = userId
          })
          })
  
          intentCreationCallback({
            clientSecret: result.client_secret
          })
      }
    }
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
      returnURL : "myapp//book-ride"
    });
    if (error) {
      console.log(error);
      
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
