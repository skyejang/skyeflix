import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import List from "../components/List";
import {
  getFavoriteMovies,
  removeFavoriteMovie,
  clearAllFavorites,
} from "../utils/storage";

const SavedListScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await getFavoriteMovies();
      setFavorites(storedFavorites);
    };
    loadFavorites();
  }, []);

  const deleteFavorite = async (movieId) => {
    Alert.alert(
      "Clear Notification",
      "Are you sure you want to delete this notification?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await removeFavoriteMovie(movieId); // Delete from saved list
              const updatedFavorites = favorites.filter(
                (movie) => movie.movieId !== movieId
              ); // status update
              setFavorites(updatedFavorites);
            } catch (error) {
              console.error("Error deleting notification:", error);
            }
          },
        },
      ]
    );
  };

  const allClearFavorites = async () => {
    Alert.alert(
      "Clear All Favorite Movies",
      "Are you sure you want to delete all Favorite Movie Lists?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              // 모든 목록 삭제 요청 처리
              await clearAllFavorites();
              setFavorites([]);
            } catch (error) {
              console.error("Error clearing notifications:", error);
            }
          },
        },
      ]
    );
  };

  const SeparatorComponent = () => (
    <View
      style={{
        height: SPACES.SPACE_5, // Adjust the space size between each item
        backgroundColor: "transparent", // The color of the dividing line
      }}
    />
  );

  const renderList = ({ item }) => (
    <List
      type={"favorite"}
      releaseDate={item.releaseDate}
      title={item.title}
      movieId={item.movieId}
      posterImg={item.posterImg}
      onDelete={() => deleteFavorite(item.movieId)}
      navigation={navigation}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLACK,
        paddingHorizontal: SPACES.SPACE_6,
        paddingBottom: SPACES.SPACE_5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: SPACES.SPACE_5,
          marginBottom: SPACES.SPACE_8,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.MEDIUM,
            color: COLORS.WHITE,
            fontSize: FONT_SIZES.LARGE * 1.25,
          }}
        >
          My Movie List
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Text
            onPress={allClearFavorites}
            style={{
              fontFamily: FONTS.MEDIUM,
              color: COLORS.GRAY_LIGHT,
              fontSize: FONT_SIZES.SMALL * 1.25,
              textDecorationLine: "underline",
            }}
          >
            All Clear
          </Text>
        </TouchableOpacity>
      </View>
      {favorites.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              color: COLORS.GRAY_LIGHT,
              fontFamily: FONTS.MEDIUM,
              fontSize: FONT_SIZES.MEDIUM * 1.25,
              textAlign: "center",
            }}
          >
            No added favorite movie list.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderList}
          ItemSeparatorComponent={SeparatorComponent}
          keyExtractor={(item) => item.movieId.toString()}
        />
      )}
    </View>
  );
};

export default SavedListScreen;
