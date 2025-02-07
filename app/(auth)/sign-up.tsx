import { ScrollView, Text, View } from "react-native";
import { images } from "@/constants";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image 
            source={images.signUpCar} 
            className="z-0 w-full h-[250px]"
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;