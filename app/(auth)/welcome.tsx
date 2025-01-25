import { router } from "expo-router";
import { SafeAreaView, Text, Touchable, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex w-full items-center justify-between bg-white">
      <TouchableOpacity onPress={() => {router.replace("/(auth)/sign-up")}}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Onboarding;