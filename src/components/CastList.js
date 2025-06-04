import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";

export const CastList = ({ character, name, profileImg }) => {
  return (
    <View style={{ width: 124 }}>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + profileImg }}
        style={{
          minHeight: 150,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      />
      <View
        style={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: COLORS.GRAY_DARK,
          padding: SPACES.SPACE_1_5,
        }}
      >
        <Text
          style={{
            color: COLORS.WHITE,
            fontFamily: FONTS.MEDIUM,
            fontSize: FONT_SIZES.SMALL * 1.25,
            textAlign: "center",
          }}
        >
          {name.length > 10 ? name.substring(0, 10) + " .." : name}
        </Text>
        <Text
          style={{
            color: COLORS.GRAY_LIGHT,
            fontFamily: FONTS.REGULAR,
            fontSize: FONT_SIZES.SMALL * 1.25,
            textAlign: "center",
          }}
        >
          {character.length > 13
            ? character.substring(0, 13) + " .."
            : character}
        </Text>
      </View>
    </View>
  );
};

export default CastList;
