import React from "react";
import Svg, { Path } from "react-native-svg";
export const TickSquareIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 29.3333H20C26.6666 29.3333 29.3333 26.6666 29.3333 20V12C29.3333 5.33329 26.6666 2.66663 20 2.66663H12C5.33329 2.66663 2.66663 5.33329 2.66663 12V20C2.66663 26.6666 5.33329 29.3333 12 29.3333Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.3334 16L14.1067 19.7734L21.6667 12.2267"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default TickSquareIcon;
