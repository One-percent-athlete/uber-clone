import { ButtonProps } from "@/types/type";
import { TouchableOpacity } from "react-native";

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case "primary":
      return "bg-primary-500";
    case "secondary":
      return "bg-secondary-500";
    case "tertiary":
      return "bg-tertiary-500";
    default:
      return "bg-primary-500";
  }
}

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