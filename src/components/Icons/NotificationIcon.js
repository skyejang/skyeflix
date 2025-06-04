import React from "react";
import Svg, { Path } from "react-native-svg";
export const NotificationIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M16.0267 3.88C11.6133 3.88 8.02666 7.46667 8.02666 11.88V15.7333C8.02666 16.5467 7.67999 17.7867 7.26666 18.48L5.73333 21.0267C4.78666 22.6 5.44 24.3467 7.17333 24.9333C12.92 26.8533 19.12 26.8533 24.8667 24.9333C26.48 24.4 27.1867 22.4933 26.3067 21.0267L24.7733 18.48C24.3733 17.7867 24.0267 16.5467 24.0267 15.7333V11.88C24.0267 7.48 20.4267 3.88 16.0267 3.88Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M18.4934 4.26667C18.0801 4.14667 17.6534 4.05334 17.2134 4C15.9334 3.84 14.7067 3.93334 13.5601 4.26667C13.9467 3.28 14.9067 2.58667 16.0267 2.58667C17.1467 2.58667 18.1067 3.28 18.4934 4.26667Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.0266 25.4133C20.0266 27.6133 18.2266 29.4133 16.0266 29.4133C14.9333 29.4133 13.9199 28.96 13.1999 28.24C12.4799 27.52 12.0266 26.5067 12.0266 25.4133"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
    />
  </Svg>
);
export default NotificationIcon;
