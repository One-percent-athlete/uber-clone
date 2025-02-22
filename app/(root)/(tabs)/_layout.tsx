import { Tabs } from "expo-router";

const layout = () =>(
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor = "white",
    }}
    >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: () => <TabIcon />
    }} />
  </Tabs>
)

export default layout;