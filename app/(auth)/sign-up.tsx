import { ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/assets/components/InputField";
import { useState } from "react";
import CustomButton from "@/assets/components/CustomButton";
import OAuth from "@/assets/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";

const SignUp = () => {

  const { isLoaded, signUp, setActive } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email:"",
    password: "",
  })

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: ""
  });

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,
        state: 'pending',
      })
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }

    const onVerifyPress = async () => {
      if (!isLoaded) return
  
      try {
        const signUpAttempt = await signUp.attemptEmailAddressVerification({
          code: verification.code,
        })
  
        if (signUpAttempt.status === 'complete') {
          await setActive({ session: signUpAttempt.createdSessionId })
          setVerification({
            ...verification,
            state: 'success',
          })
        } else {
          setVerification({
            ...verification,
            error: "Verification failed",
            state: 'failed',
          })
        }
      } catch (err: any) {
        setVerification({
          ...verification,
          error: err.error[0].longMessage,
          state: 'failed',
        })
      }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaBold absolute buttom-5 left-5">Create Your Account<Text>
      </View>

      <View className="p-5">
        <InputField label="Name" placeholder="Enter Your Name" icon={icons.person} value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value, })} labelStyle="" containStyle={undefined} inputStyle={undefined} iconStyle={undefined} className={undefined} />
        <InputField label="Email" placeholder="Enter Your Email" icon={icons.email} value={form.email}
            onChangeText={(value: any) => setForm({ ...form, email: value, })} labelStyle="" containStyle={undefined} inputStyle={undefined} iconStyle={undefined} className={undefined} />
        <InputField label="Password" placeholder="Enter Your Password" icon={icons.lock} secureTextEntry={true} value={form.password}
            onChangeText={(value: any) => setForm({ ...form, password: value, })} labelStyle="" containStyle={undefined} inputStyle={undefined} iconStyle={undefined} className={undefined} />
        <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6"/>

        <OAuth />

        <Link href="/sign-in" className="text-lg text-center text-general-200 mt-10">
          <Text>Already have an account?</Text>
          <Text className="text-primary-500">Login</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignUp;
