import { View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Payment = () => {
  const openPaymenSheet = async () => {
    console.log("Payment Sheet Opened");
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
