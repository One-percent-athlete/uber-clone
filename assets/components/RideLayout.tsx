import { View, Text } from "react-native";

const RideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandleRootView className="flex flex-col h-full">
      {children}
    </GestureHandleRootView>
  );
};

export default RideLayout;
