import RideLayout from "@/assets/components/RideLayout";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";

const FindRide = () => {
  const { userAddress, destinationAddress, setDestinationLocation } =
    useLocationStore();
  return (
    <RideLayout>
      <Text className="text-2xl">Find Ride</Text>
      <Text className="text-2xl">Find Ride</Text>
      <Text className="text-2xl">Find Ride</Text>
      <Text className="text-2xl">Find Ride</Text>
      <Text className="text-2xl">Find Ride</Text>
    </RideLayout>
  );
}

export default FindRide;