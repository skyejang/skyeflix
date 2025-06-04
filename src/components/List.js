import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import IconButton from "./IconButton";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";

export const List = ({
  type,
  title,
  releaseDate,
  posterImg,
  movieId,
  onDelete,
  navigation,
}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        paddingVertical: SPACES.SPACE_4,
        paddingHorizontal: SPACES.SPACE_4,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {type === "favorite" && (
          <Image
            source={{ uri: "https://image.tmdb.org/t/p/w500" + posterImg }}
            style={{
              width: 64,
              height: 82,
              borderRadius: 5,
              marginRight: SPACES.SPACE_4,
            }}
          />
        )}
        <View style={type === "favorite" ? { width: 180 } : { width: "auto" }}>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("Detail", { movieId })}
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.MEDIUM * 1.25,
                marginBottom: SPACES.SPACE_2,
              }}
            >
              {title}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.WHITE,
              fontFamily: FONTS.LIGHT,
              fontSize: FONT_SIZES.MEDIUM * 1.25,
            }}
          >
            {releaseDate}
          </Text>
        </View>
      </View>
      {/* color, size, icon */}
      <IconButton
        color={COLORS.WHITE}
        size={"Lg"}
        icon={"Trash"}
        strokeWidth={1.5}
        fill={"none"}
        onPress={onDelete}
      />
    </View>
  );
};

export default List;
