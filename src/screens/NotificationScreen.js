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
  deleteNotification,
  getStoredNotifications,
  removeScheduledNotification,
} from "../utils/notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
const NotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // Gets and sets the saved notification list when the component is mounted.
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const storedNotifications = await getStoredNotifications();
      setNotifications(storedNotifications);
      console.log(notifications);
    } catch (error) {
      console.error("Error loading notifications:", error);
    }
  };

  const handleDeleteNotification = async (notificationId) => {
    console.log(notificationId, typeof notificationId);
    Alert.alert(
      "Clear Notification",
      "Are you sure you want to delete this notification?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              // Processing the delete notification request
              await deleteNotification(notificationId);
              // Reload notification list
              loadNotifications();
            } catch (error) {
              console.error("Error deleting notification:", error);
            }
          },
        },
      ]
    );
  };

  const handleClearAllNotifications = () => {
    Alert.alert(
      "Clear All Notifications",
      "Are you sure you want to delete all notifications?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              // Processing the delete all of the notifications request
              await AsyncStorage.removeItem("notifications");
              setNotifications([]);
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
        height: SPACES.SPACE_5,
        backgroundColor: "transparent",
      }}
    />
  );

  const renderList = ({ item }) => (
    <List
      type={"notification"}
      releaseDate={item.releaseDate}
      title={item.body}
      onDelete={() => handleDeleteNotification(Number(item.id))}
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
          Notification List
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleClearAllNotifications}
        >
          <Text
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
      {notifications.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              color: COLORS.GRAY_LIGHT,
              fontFamily: FONTS.MEDIUM,
              fontSize: FONT_SIZES.MEDIUM * 1.25,
              textAlign: "center",
            }}
          >
            No registered notifications.
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderList}
          ItemSeparatorComponent={SeparatorComponent}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </View>
  );
};

export default NotificationScreen;
