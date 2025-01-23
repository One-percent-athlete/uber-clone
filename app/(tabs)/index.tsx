import { ReactElement } from "react";
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView className="text-red-500">
      <Text>Hello, World!</Text>
    </SafeAreaView>
  );
}