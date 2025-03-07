import GoogleTextInput from "@/assets/components/GoogleTextInput";
import RideLayout from "@/assets/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Ride">
      <View className="my-3">
        <Text className="text-2xl font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
    </RideLayout>
  );
};

export default FindRide;
