import AsyncStorage from "@react-native-async-storage/async-storage";

// store movie information to starage
export const storeFavoriteMovie = async (movie) => {
  try {
    const favorites = await getFavoriteMovies();
    const newFavorites = [...favorites, movie];
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("Stored favorites:", newFavorites);
  } catch (e) {
    console.error(e);
  }
};
// Function to remove movie information
export const removeFavoriteMovie = async (movieId) => {
  try {
    const favorites = await getFavoriteMovies();
    const newFavorites = favorites.filter((movie) => movie.movieId !== movieId);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("Updated favorites after removal:", newFavorites);
  } catch (e) {
    console.error(e);
  }
};
// Function that fetches all stored movie information
export const getFavoriteMovies = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites != null ? JSON.parse(favorites) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

// Function to delete all favorites
export const clearAllFavorites = async () => {
  try {
    await AsyncStorage.removeItem("favorites");
    console.log("All favorites cleared");
  } catch (error) {
    console.error("Error clearing favorites:", error);
  }
};
