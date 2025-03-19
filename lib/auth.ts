import * as SecureStore from "expo-secure-store";
import { TokenCache } from "@clerk/clerk-expo/dist/cache";
import * as Linking from "expo-linking";
import { fetchAPI } from "./fetch";

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
    const { createdSessionId, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/tabs/home", { scheme: "myapp" }),
    });
    if (createdSessionId) {
      if (setActive) {
        await setActive!({ session: createdSessionId });

        if (signUp.createdUserId) {
          await fetchAPI("/(api)/user", {
            method: "POST",
            body: JSON.stringify({
              name: `${signUp.firstName} ${signUp.lastName}`,
              email: signUp.email,
              clerkId: signUp.createdUserId
            });
          });
        }
        return {
          success: true,
          code: "success",
          message: "You have successfully authenticated."
        }
      }
    } 
    return {
      success: false,
      message: "An error ocurred."
    };
  } catch (error: any) {
    console.log(error);
    return  {
      success: false,
      message: error?.errors[0]?.longMessage
    };
  }
};
