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
  <View>
    <Text className="text-3xl">{ride.driver.first_name}</Text>
  </View>
)

export default RideCard;