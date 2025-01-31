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
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full flex flex-row items-center justify-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
  >
    {IconLeft && <IconLeft />}
    <Text>{title}</Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
)

export default CustomButton;