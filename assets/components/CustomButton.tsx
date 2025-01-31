import { TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => (
  <TouchableOpacity onPress={onPress}>
    {IconLeft && <IconLeft />}
    <Text>{title}</Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
)

export default CustomButton;