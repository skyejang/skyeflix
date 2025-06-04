import React from "react";
import Svg, { Path } from "react-native-svg";
export const TrashIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28 7.97331C23.56 7.53331 19.0933 7.30664 14.64 7.30664C12 7.30664 9.36 7.43997 6.72 7.70664L4 7.97331"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.3334 6.62663L11.6267 4.87996C11.84 3.61329 12 2.66663 14.2534 2.66663H17.7467C20 2.66663 20.1734 3.66663 20.3734 4.89329L20.6667 6.62663"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M25.1334 12.1866L24.2667 25.6133C24.12 27.7066 24 29.3333 20.28 29.3333H11.72C8.00003 29.3333 7.88003 27.7066 7.73337 25.6133L6.8667 12.1866"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.7733 22H18.2133"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.6666 16.6666H19.3333"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default TrashIcon;
