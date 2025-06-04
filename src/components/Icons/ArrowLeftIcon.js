import React from "react";
import Svg, { Path } from "react-native-svg";
export const ArrowLeftIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 26.5599L11.3066 17.8666C10.28 16.8399 10.28 15.1599 11.3066 14.1333L20 5.43994"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default ArrowLeftIcon;
