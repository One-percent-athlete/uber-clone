import { View, Text } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";


const OAuth = () => (
  <View>
    <View className="flex flex-row items-center justify-center mt-4 gap-x-3">
      <View className="flex-1 h-[1px] bg-general-100" />
      <Text className="text-lg">Or</Text>
      <View className="flex-1 h-[1px] bg-general-100" />
    </View>

    <CustomButton
      title="Login with Google"
      className="mt-5 w-full shadow-none"
      IconLeft={() => (
        <Image
          source={icons.google}
          resizeMode="contain"
          className="w-5 h-5 mx-2"
        />
    )}
    bgVariant="outline"
    textVariant="primary"
    onPress={handleGoogleSignIn}
    />
  </View>
)

export default OAuth;