import { View, Text } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView className="flex-1 bg-red-500">
      <Text className="text-white">Map</Text>
    </MapView>
);
}
export default Map