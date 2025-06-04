import { StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles } from "../commonStyles";
import { IconComponent } from "./IconComponent";

export const IconButton = ({
  color,
  size,
  icon,
  strokeWidth,
  fill,
  onPress,
}) => {
  const IconStyle = StyleSheet.flatten([commonStyles[`Icon${size}`]]);
  let iconSize = size === "Lg" ? 28 : "Md" ? 24 : 16;
  return (
    <TouchableOpacity style={IconStyle} onPress={onPress} activeOpacity={1}>
      <IconComponent
        color={color}
        icon={icon}
        iconSize={iconSize}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
