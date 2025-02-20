import { Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/assets/components/InputField";
import React, { useState } from "react";
import CustomButton from "@/assets/components/CustomButton";
import OAuth from "@/assets/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { router } from "expo-router";

const SignUp = () => {

  const { isLoaded, signUp, setActive } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [verification, setVerification] = useState({
    state: "pending",
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
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      })
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }
  const onVerifyPress = async () => {
    if (!isLoaded) return;
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId })
        setVerification({
          ...verification,
          state: "success",
        })
      } else {
        setVerification({
          ...verification,
          error: "Verification failed",
          state: "failed",
        })
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.error[0].longMessage,
        state: "failed",
      })
    }
  }
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaBold absolute buttom-5 left-5">
          Create Your Account
        </Text>
      </View>

      <View className="p-5">
        <InputField
          label="Name"
          placeholder="Enter Your Name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value: any) => setForm({ ...form, name: value })}
          labelStyle=""
          containStyle={undefined}
          inputStyle={undefined}
          iconStyle={undefined}
          className={undefined}
        />
        <InputField
          label="Email"
          placeholder="Enter Your Email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value: any) => setForm({ ...form, email: value })}
          labelStyle=""
          containStyle={undefined}
          inputStyle={undefined}
          iconStyle={undefined}
          className={undefined}
        />
        <InputField
          label="Password"
          placeholder="Enter Your Password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value: any) => setForm({ ...form, password: value })}
          labelStyle=""
          containStyle={undefined}
          inputStyle={undefined}
          iconStyle={undefined}
          className={undefined}
        />
        <CustomButton
          title="Sign Up"
          onPress={onSignUpPress}
          className="mt-6"
        />

        <OAuth />

        <Link
          href="/sign-in"
          className="text-lg text-center text-general-200 mt-10"
        >
          <Text>Already have an account?</Text>
          <Text className="text-primary-500">Login</Text>
        </Link>
      </View>
      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => setVerification({ ...verification, code: "" })}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text
            className="text-2xl font-JakartaExtraBold mb-
            2"
          >
            Verification
          </Text>
          <Text className="font-Jakarta mb-5">
            We've sent a verification code to {form.email}.
          </Text>
        </View>
      </ReactNativeModal>
      <ReactNativeModal isVisible={verification.state === "success"}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] h-[110px] mx-auto my-5"
          />
          <Text className="text-3xl font-JakartaBold text-center">
            Verified
          </Text>
          <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
            You have successfully verified your account
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => router.replace("/(root)/(tabs)/home")}
            className="mt-5"
          ></CustomButton>
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default SignUp;
