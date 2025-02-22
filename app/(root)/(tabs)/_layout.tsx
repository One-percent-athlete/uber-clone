import { icons } from "@/constants";
import { Tabs } from "expo-router";

const TabIcon= () => (
  <View>
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