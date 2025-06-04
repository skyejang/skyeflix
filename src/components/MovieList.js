import React from "react";
import { Image, Text, View } from "react-native";
import Button from "./Button";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";

export const MovieList = ({
  movieTitle,
  releaseDate,
  posterImg,
  navigation,
  movieId,
}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        padding: SPACES.SPACE_4,
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + posterImg }}
        style={{
          minWidth: 92,
          minHeight: 117,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          marginLeft: SPACES.SPACE_6,
          flexWrap: "nowrap",
          width: "60%",
          height: "auto",
        }}
      >
        <View style={{}}>
          <Text
            style={{
              color: COLORS.WHITE,
              fontFamily: FONTS.MEDIUM,
              fontSize: FONT_SIZES.MEDIUM * 1.25,
              marginBottom: SPACES.SPACE_1_5,
            }}
          >
            {movieTitle}
          </Text>
          <Text
            style={{
              color: COLORS.WHITE,
              fontFamily: FONTS.LIGHT,
              fontSize: FONT_SIZES.SMALL * 1.25,
              marginBottom: SPACES.SPACE_8,
            }}
          >
            {releaseDate}
          </Text>
        </View>
        <Button
          title={"More"}
          size={"Sm"}
          color={"White"}
          icon={"More"}
          strokeWidth={2}
          onPress={() =>
            navigation.navigate("Detail", { movieId, releaseDate })
          }
        />
      </View>
    </View>
  );
};

export default MovieList;
