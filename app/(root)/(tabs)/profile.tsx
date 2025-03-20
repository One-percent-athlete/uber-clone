import { useUser } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/input-field";

const Profile = () => {
  const { user } = useUser();

  return <SafeAreaView className="flex-1"></SafeAreaView>;
};

export default Profile;
