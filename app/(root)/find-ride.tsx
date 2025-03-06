import RideLayout from "@/assets/components/FindLayout";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";

const FindRide = () => {
  const { userAddress, destinationAddress, setDestinationLocation } =
    useLocationStore();
  return (
    <RideLayout>
      <Text className="text-2xl">You Are Here: {userAddress}</Text>
      <Text className="text-2xl">You Are Going To: {destinationAddress}</Text>
    </RideLayout>
  );
}

export default FindRide;