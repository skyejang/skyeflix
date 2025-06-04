import React from "react";
import { Text, View, Image } from "react-native";
import IconButton from "./IconButton";
import { COLORS, FONTS, SPACES } from "../constants";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);

  // Check if the current stack has a previous screen
  const isPreviousScreen = navigation.canGoBack();

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: SPACES.SPACE_4,
        paddingHorizontal: SPACES.SPACE_6,
      }}
    >
      {/* Show the Back button only when the previous screen is present*/}
      <View>
        {isPreviousScreen ? (
          <IconButton
            color={COLORS.WHITE}
            iconSize={"Lg"}
            icon={"ArrowLeft"}
            strokeWidth={2}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <View style={{ width: 24, height: 24 }}></View>
        )}
      </View>
      <View style={{ width: 125, marginLeft: SPACES.SPACE_8 }}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
          }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: SPACES.SPACE_4 }}>
          <IconButton
            color={COLORS.WHITE}
            iconSize={"Lg"}
            icon={"DirectNomal"}
            strokeWidth={1.5}
            onPress={() => navigation.navigate("SavedList")}
          />
        </View>
        <View style={{}}>
          <IconButton
            color={COLORS.WHITE}
            iconSize={"Lg"}
            icon={"Notification"}
            strokeWidth={1.5}
            onPress={() => navigation.navigate("Notification")}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
