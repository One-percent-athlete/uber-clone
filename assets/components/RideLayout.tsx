import { View, Text } from "react-native";

const RideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="flex flex-col h-full">
      <Text>TOP OF THE LAYOUT</Text>
      {children}
      <Text>BUTTOM OF THE LAYOUT</Text>
    </View>
  );
};

export default RideLayout;
