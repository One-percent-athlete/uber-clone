import { Tabs } from "expo-router";

const layout = () =>(
  <Tabs
    initialRouteName="index"
    screenOptions={{
      tabBarActiveTintColor = "white",
    }}
    ></Tabs>
)

export default layout;