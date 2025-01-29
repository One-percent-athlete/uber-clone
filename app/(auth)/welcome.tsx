import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useRef } from "react";


const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const const [activeIndex, setActiveIndex] = useState(0)
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

      <Swiper ref={swiperRef} loop={false} dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />} activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF]" />} onIndexChanged={(index) => {setActiveIndex(index)}}>
        
      </Swiper>
    </SafeAreaView>
  );
};
export default Onboarding;