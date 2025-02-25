import { Ride } from "@/types/type";
import { View, Text } from "react-native";

const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => (
  <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
    <View className="flex flex-row items-center justify-between p-3">
        <View className="flex flex-row items-center justify-between">
            <Image
                className="w-12 h-12 rounded-full"
                source={{ uri: driver.profile_image_url }}
            />
            <View className="ml-3">
                <Text className="text-sm text-general-200">Driver</Text>
                <Text className="text-lg font-JakartaExtraBold">{driver.first_name}</Text>
            </View>
    </View>
    <Text className="text-3xl">{driver.first_name}</Text>
  </View>
)

export default RideCard;