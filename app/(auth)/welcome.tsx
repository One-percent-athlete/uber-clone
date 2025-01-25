import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { SafeAreaView, Text, Touchable, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex w-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper>
        
      </Swiper>
    </SafeAreaView>
  );
};
export default Onboarding;