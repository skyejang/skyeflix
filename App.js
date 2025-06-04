import React, { useState, useEffect } from "react";
import * as Expo from "expo";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator, Alert, Linking } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "./src/constants";
import Header from "./src/components/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import * as Calendar from "expo-calendar";
import HomeScreen from "./src/screens/HomeScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import SavedListScreen from "./src/screens/SavedListScreen";
import DetailScreen from "./src/screens/DetailScreen";
import {
  requestNotificationPermission,
  scheduleNotification,
} from "./src/utils/notification";
import { requestCalendarPermission } from "./src/utils/calendar";

const Stack = createNativeStackNavigator();

requestNotificationPermission(); // Push notification permission request function
const openNotificationSettings = () => {
  Linking.openSettings();
};
export default function App() {
  useEffect(() => {
    const setupNotifications = async () => {
      try {
        const permissionGranted = await requestNotificationPermission();
        if (!permissionGranted) {
          Alert.alert(
            "Notification permissions required",
            "You must allow notification permissions to receive notifications.",
            [
              { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
              { text: "Settings", onPress: openNotificationSettings },
            ],
            { cancelable: false }
          );
        }
      } catch (error) {
        console.error("Notification permission setting error:", error);
      }
    };

    setupNotifications();
  }, []);

  Notifications.setNotificationHandler({
    //push handler processing function
    handleNotification: async () => ({
      //Asynchronous function called when notifications arrive
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  }); //Setting Up for Push Notifications

  const [fontsLoaded] = useFonts({
    [FONTS.LIGHT]: PlusJakartaSans_300Light,
    [FONTS.REGULAR]: PlusJakartaSans_400Regular,
    [FONTS.MEDIUM]: PlusJakartaSans_500Medium,
    [FONTS.LOGO]: RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={COLORS.WHITE} />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" backgroundColor={COLORS.WHITE} />
          <Header />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={NotificationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavedList"
              component={SavedListScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
});
