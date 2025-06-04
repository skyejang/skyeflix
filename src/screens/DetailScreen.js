import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useMovieDetail, useGetCredit } from "../hook/useDetail";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import IconComponent from "../components/IconComponent";
import IconButton from "../components/IconButton";
import CastList from "../components/CastList";
import Detail from "../components/Detail";
import Margin from "../components/Margin";
import {
  storeFavoriteMovie,
  removeFavoriteMovie,
  getFavoriteMovies,
} from "../utils/storage";

const DetailScreen = ({ navigation, route, isFavorite }) => {
  const { movieId, releaseDate } = route.params;
  const movieDetail = useMovieDetail(movieId);
  const castDetail = useGetCredit(movieId);
  const crewDetail = useGetCredit(movieId);
  const [clicked, setClicked] = useState(isFavorite);

  const genreText = movieDetail.genre
    ? movieDetail.genre
        .slice(0, 2)
        .map((genre) => genre.name)
        .join(", ")
    : "";
  //render cast Flat list
  const renderCast = ({ item }) => (
    <CastList
      character={item.character}
      name={item.name}
      profileImg={item.profile}
    />
  );
  //render crew Flat list
  const renderCrew = ({ item }) => (
    <CastList character={item.job} name={item.name} profileImg={item.profile} />
  );
  // Separator FlatList component
  const SeparatorComponent = () => (
    <View
      style={{
        width: SPACES.SPACE_5, //Adjust the space size between each item
        backgroundColor: "transparent", // the color of the dividing line
      }}
    />
  );

  useEffect(() => {
    const loadFavorites = async () => {
      const favorites = await getFavoriteMovies();
      setClicked(favorites.some((movie) => movie.movieId === movieId));
    };
    loadFavorites();
  }, [movieId]);

  const clickFavorite = async () => {
    const movie = {
      movieId: movieId,
      title: movieDetail.title,
      releaseDate: releaseDate,
      posterImg: movieDetail.uri,
    };
    if (clicked) {
      await removeFavoriteMovie(movieId);
    } else {
      await storeFavoriteMovie(movie);
    }
    setClicked(!clicked);
  };
  return (
    <ScrollView style={{ flex: 1 }} bounces={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.BLACK,
          paddingHorizontal: SPACES.SPACE_6,
          paddingBottom: SPACES.SPACE_5,
        }}
      >
        {/* title area */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: SPACES.SPACE_5,
            marginBottom: SPACES.SPACE_8,
          }}
        >
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: FONTS.MEDIUM,
                color: COLORS.WHITE,
                fontSize: FONT_SIZES.LARGE * 1.25,
              }}
            >
              {movieDetail.title}
            </Text>
            <View style={{ flexDirection: "row", marginTop: SPACES.SPACE_2_5 }}>
              <Text
                style={{
                  color: COLORS.GRAY_LIGHT,
                  fontSize: FONT_SIZES.MEDIUM * 1.25,
                  fontWeight: FONTS.REGULAR,
                  marginRight: SPACES.SPACE_4,
                }}
              >
                {releaseDate}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: COLORS.GRAY_LIGHT,
                    fontSize: FONT_SIZES.MEDIUM * 1.25,
                    fontWeight: FONTS.REGULAR,
                  }}
                >
                  {genreText}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              color={clicked ? COLORS.RED_POINT : COLORS.WHITE}
              fill={clicked ? COLORS.RED_POINT : "none"}
              icon={"Star"}
              iconSize={24}
              strokeWidth={2.5}
              onPress={clickFavorite}
            />
          </View>
        </View>
        {/* movie context area */}
        <Detail
          language={movieDetail.language}
          runtime={movieDetail.runtime}
          posterImg={movieDetail.uri}
          overview={movieDetail.overview}
          movieId={movieId}
          releaseDate={releaseDate}
          title={movieDetail.title}
        />
        {/* cast area */}
        {castDetail.castDetail.length > 0 && (
          <View style={{ marginTop: SPACES.SPACE_8 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.LARGE * 1.25,
                marginBottom: SPACES.SPACE_4,
              }}
            >
              Cast
            </Text>
            <FlatList
              data={castDetail.castDetail}
              renderItem={renderCast}
              keyExtractor={(_, index) => String(index)}
              horizontal // Enable horizontal scrolling
              showsHorizontalScrollIndicator={false} //  Removal horizontal scrolling
              ItemSeparatorComponent={SeparatorComponent}
            />
          </View>
        )}
        {/* crew area */}
        {crewDetail.crewDetail.length > 0 && (
          <View style={{ marginTop: SPACES.SPACE_8 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.LARGE * 1.25,
                marginBottom: SPACES.SPACE_4,
              }}
            >
              Crew
            </Text>
            <FlatList
              data={crewDetail.crewDetail}
              renderItem={renderCrew}
              keyExtractor={(_, index) => String(index)}
              horizontal // Enable horizontal scrolling
              showsHorizontalScrollIndicator={false} // Removal horizontal scrolling
              ItemSeparatorComponent={SeparatorComponent}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default DetailScreen;
