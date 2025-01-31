import { TouchableOpacity } from "react-native";

const CustomButton = () => (
  <TouchableOpacity onPress={() => alert('You pressed me!')}>
    <Text>Press me</Text>
  </TouchableOpacity>
)

export default CustomButton;