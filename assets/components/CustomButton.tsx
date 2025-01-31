import { TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>Press me</Text>
  </TouchableOpacity>
)

export default CustomButton;