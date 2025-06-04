import React from "react";
import { View } from "react-native";

export const Margin = ({ height }) => {
  return (
    <View
      style={{
        height: height, // Adjust the space size between each item
        backgroundColor: "transparent", // the color of the dividing line
      }}
    />
  );
};
export default Margin;
