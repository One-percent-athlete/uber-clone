import { ScrollView, Text, View } from "react-native";
import { images } from "@/constants";
import InputField from "@/assets/components/InputField";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaBold absolute buttom-5 left-5">Create Your Account<Text>
        </View>

        <View className="p-5">
          <InputField />
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;