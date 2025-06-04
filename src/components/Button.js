import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../commonStyles";
import IconComponent from "./IconComponent";
import { COLORS } from "../constants";

export const Button = ({
  title,
  size,
  color,
  icon,
  strokeWidth,
  onPress,
  disabled,
}) => {
  const buttonStyle = StyleSheet.flatten([
    commonStyles[`Button${size}`],
    commonStyles[`Button${color}`],
  ]);
  const textStyle = StyleSheet.flatten([
    commonStyles[`Button${size}Text`],
    commonStyles[`Button${color}Text`],
  ]);

  let iconColor = color === "White" ? COLORS.BLACK : COLORS.WHITE;

  let iconSize = size === "Lg" ? 24 : 18;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={1}>
      <IconComponent
        icon={icon}
        color={iconColor}
        iconSize={iconSize}
        strokeWidth={strokeWidth}
      />
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
