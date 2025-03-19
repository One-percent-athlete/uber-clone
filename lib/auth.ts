import * as SecureStore from "expo-secure-store";
import { Linking, Platform } from "react-native";
import { TokenCache } from "@clerk/clerk-expo/dist/cache";

export const tokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐 \n`);
        } else {
          console.log("No values stored under key: " + key);
        }
        return item;
      } catch (error) {
        console.error("secure store get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: (key: string, token: string) => {
      return SecureStore.setItemAsync(key, token);
    },
  };
};

export const googleOAuth = async (startOAuthFlow: any) => {
  try {
    const { createdSessionId, signOut, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
    });
    if (createdSessionId) {
      setActive!({ session: createdSessionId });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
