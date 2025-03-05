import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <GoogleTextInput
      handlePress={function ({
        latitude,
        longitude,
        address,
      }: {
        latitude: number;
        longitude: number;
        address: string;
      }): void {
        throw new Error("Function not implemented.");
      }}
    >
      Search
    </GoogleTextInput>
  </View>
);

export default GoogleTextInput;
