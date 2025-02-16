import { ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/assets/components/InputField";
import { useState } from "react";
import CustomButton from "@/assets/components/CustomButton";
import OAuth from "@/assets/components/OAuth";

const SignIn = () => {

  const [form, setForm] = useState({
    email:"",
    password: "",
  })

  const onSignInPress = async () => {
    console.log(form);
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaBold absolute buttom-5 left-5">Welcome to <Text>
        </View>

        <View className="p-5">
          <InputField label="Email" placeholder="Enter Your Email" icon={icons.email} value={form.email}
              onChangeText={(value: any) => setForm({ ...form, email: value, })} labelStyle="" containStyle={undefined} inputStyle={undefined} iconStyle={undefined} className={undefined} />
          <InputField label="Password" placeholder="Enter Your Password" icon={icons.lock} secureTextEntry={true} value={form.password}
              onChangeText={(value: any) => setForm({ ...form, password: value, })} labelStyle="" containStyle={undefined} inputStyle={undefined} iconStyle={undefined} className={undefined} />
          <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6"/>

          <OAuth />

          <Link href="/sign-up" className="text-lg text-center text-general-200 mt-10">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
