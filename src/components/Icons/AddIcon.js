import React from "react";
import Svg, { Path } from "react-native-svg";
export const AddIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 16H24"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16 24V8"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default AddIcon;
