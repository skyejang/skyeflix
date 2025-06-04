import React from "react";
import Svg, { Path } from "react-native-svg";
export const LocationIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 17.9067C18.2975 17.9067 20.16 16.0442 20.16 13.7467C20.16 11.4492 18.2975 9.58667 16 9.58667C13.7025 9.58667 11.84 11.4492 11.84 13.7467C11.84 16.0442 13.7025 17.9067 16 17.9067Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
    <Path
      d="M4.82673 11.32C7.45339 -0.226704 24.5601 -0.213371 27.1734 11.3333C28.7067 18.1066 24.4934 23.84 20.8001 27.3866C18.1201 29.9733 13.8801 29.9733 11.1867 27.3866C7.50673 23.84 3.29339 18.0933 4.82673 11.32Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
  </Svg>
);
export default LocationIcon;
