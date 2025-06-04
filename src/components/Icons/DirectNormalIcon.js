import React from "react";
import Svg, { Path } from "react-native-svg";
export const DirectNomalIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 29.3333H20C26.6666 29.3333 29.3333 26.6666 29.3333 20V12C29.3333 5.33329 26.6666 2.66663 20 2.66663H12C5.33329 2.66663 2.66663 5.33329 2.66663 12V20C2.66663 26.6666 5.33329 29.3333 12 29.3333Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.66663 17.3333H7.67996C8.69329 17.3333 9.61329 17.9066 10.0666 18.8133L11.2533 21.1999C12 22.6666 13.3333 22.6666 13.6533 22.6666H18.36C19.3733 22.6666 20.2933 22.0933 20.7466 21.1866L21.9333 18.7999C22.3866 17.8933 23.3066 17.3199 24.32 17.3199H29.3066"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default DirectNomalIcon;
