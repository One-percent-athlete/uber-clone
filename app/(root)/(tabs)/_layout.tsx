import { icons } from "@/constants";
import { Tabs } from "expo-router";

const TabIcon= () => (
  <View
    className={`flex flex-row items-center justify-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View>
      <Image source={icons.home} />
    </View>
  </View>
)

const layout = () =>(
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor: "white",
    }}
    >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
    }} 
    />
    <Tabs.Screen
      name="rides"
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
    }} 
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
    }} 
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
    }} 
    />
  </Tabs>
)

export default layout;