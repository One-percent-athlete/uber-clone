import { SafeAreaView, Text, Touchable, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex w-full items-center justify-between bg-white">
      <TouchableOpacity>
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Onboarding;