import React, { useEffect, useState } from "react";
import { View, Text, Image, Linking, Alert } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import Button from "./Button";
import Margin from "./Margin";
import { useVideoDetail } from "../hook/useDetail";
import * as Notifications from "expo-notifications";
import {
  deleteNotification,
  getStoredNotifications,
  requestNotificationPermission,
  scheduleNotification,
} from "../utils/notification";
import { addCalendarEvent } from "../utils/calendar";
import IconComponent from "./IconComponent";

export const Detail = ({
  language,
  runtime,
  posterImg,
  overview,
  movieId,
  releaseDate,
  title,
}) => {
  const videoDetail = useVideoDetail(movieId);
  const [clicked, setClicked] = useState(true);
  const movieLink = () => {
    // Move to specific link
    Linking.openURL("https://www.youtube.com/watch?v=" + videoDetail);
  };

  useEffect(() => {
    const checkIfNotificationExists = async () => {
      const notifications = await getStoredNotifications();
      const notificationExists = notifications.some(
        (notification) => notification.id && notification.id === movieId
      );
      setClicked(!notificationExists);
    };
    checkIfNotificationExists();
  });
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("!!!!!!!!!!!");
        console.log("알림 전송 완료", notification);
      }
    );

    // Removing a Listener on Component Unmount
    return () => {
      subscription.remove();
    };
  }, []);

  const sendPush = () => {
    // Call notification transfer function
    // Showing alert
    scheduleNotification(movieId, releaseDate, title);
    Alert.alert("Reminder Added", "Reminder has been added successfully.", [
      { text: "OK" },
    ]);
    setClicked(!clicked);
  };

  useEffect(() => {
    console.log("clicked check");
    console.log(clicked);
  }, [clicked]);

  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        padding: SPACES.SPACE_4,
        // flexDirection: "row",
        width: "100%",
      }}
    >
      {/* img and explanation area */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: SPACES.SPACE_6,
        }}
      >
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500" + posterImg }}
          style={{
            width: 124,
            height: 150,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            marginLeft: SPACES.SPACE_4,
            width: "52%",
          }}
        >
          {videoDetail && (
            <>
              <Button
                title={"Watch trailer"}
                size={"Lg"}
                color={"White"}
                icon={"Play"}
                strokeWidth={2}
                onPress={movieLink}
              />
              <Margin height={SPACES.SPACE_2} />
            </>
          )}
          {/* Can't find out any way in Expo cli */}
          {/* <Button
            title={"Add Calendar"}
            icon={"CalendarAdd"}
            size={"Lg"}
            color={"Black"}
            strokeWidth={2}
            // onPress={handleAddCalendarEvent}
          /> */}
          <Margin height={SPACES.SPACE_2} />
          {clicked ? (
            <Button
              title={"Add Reminder"}
              icon={"NotificationBing"}
              size={"Lg"}
              color={"Black"}
              strokeWidth={2}
              onPress={sendPush}
            />
          ) : (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconComponent
                icon={"TickSquare"}
                color={COLORS.WHITE}
                iconSize={24}
                fill={"none"}
                strokeWidth={2}
              />
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontSize: FONT_SIZES.MEDIUM * 1.2,
                  textAlign: "center",
                  margin: SPACES.SPACE_1_5,
                  fontFamily: FONTS.MEDIUM,
                }}
              >
                Reminder Added.
              </Text>
            </View>
          )}
        </View>
      </View>
      {/* contents text area */}
      <>
        <View style={{ flexDirection: "row", marginBottom: SPACES.SPACE_2_5 }}>
          <View style={{ marginRight: SPACES.SPACE_6 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.SMALL * 1.25,
                marginBottom: SPACES.SPACE_1,
              }}
            >
              Runtime
            </Text>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.LIGHT,
                fontSize: FONT_SIZES.SMALL * 1.25,
              }}
            >
              {runtime}min
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.SMALL * 1.25,
                marginBottom: SPACES.SPACE_1,
              }}
            >
              Language
            </Text>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.REGULAR,
                fontSize: FONT_SIZES.SMALL * 1.25,
              }}
            >
              {language}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: COLORS.WHITE,
            fontFamily: FONTS.REGULAR,
            fontSize: FONT_SIZES.SMALL * 1.25,
          }}
        >
          {overview}
        </Text>
      </>
    </View>
  );
};

export default Detail;
