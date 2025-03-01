import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="flex-1 w-full h-full rounded-2xl"
    >
      <Text className="text-white">Map</Text>
    </MapView>
);
}
export default Map