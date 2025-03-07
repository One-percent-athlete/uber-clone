import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView className="flex flex-col h-full">
      {children}
    </GestureHandlerRootView>
  );
};

export default RideLayout;
