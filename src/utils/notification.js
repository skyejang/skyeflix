import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

// Notification Storage Function
const storeNotification = async (notification) => {
  try {
    let notifications = await AsyncStorage.getItem("notifications");
    notifications = notifications ? JSON.parse(notifications) : [];

    // Add a new notification
    notifications.push(notification);

    // Save to AsyncStorage
    await AsyncStorage.setItem("notifications", JSON.stringify(notifications));
  } catch (error) {
    console.error("Error storing notification:", error);
  }
};

// Delete Notifications Function
export const deleteNotification = async (notificationId) => {
  try {
    let storedNotifications = await AsyncStorage.getItem("notifications");
    storedNotifications = storedNotifications
      ? JSON.parse(storedNotifications)
      : [];

    console.log("Stored notifications:", storedNotifications);

    // Save an updated notification list to AsyncStorage
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(storedNotifications)
    );

    // Cancel scheduled notifications using Expo's cancelScheduledNotificationAsync function
    const notificationToRemove = storedNotifications.find(
      (notif) => notif.id === notificationId
    );

    console.log("debugging!!!!!!!!!!!", notificationToRemove);
    // Delete Selected Notifications
    const updatedNotifications = storedNotifications.filter(
      (notif) => notif.id !== notificationId
    );

    // Save deleted notification list back to AsyncStorage
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );

    console.log("Notifications after deletion:", updatedNotifications);
  } catch (error) {
    console.error("Error removing notification:", error);
  }
};

//Permission request function
export const requestNotificationPermission = async () => {
  //   console.log("Call permission request function");
  const { status } = await Notifications.requestPermissionsAsync();
  //   console.log("Current permission status : ", status);
  return status === "granted";
};

// Scheduled notification function
export const scheduleNotification = async (movieId, releaseDate, title) => {
  console.log(
    "Scheduling notification for movieId:",
    movieId,
    "title:",
    title,
    "releaseDate:",
    releaseDate
  );

  try {
    // Create a Date object based on the date you enter
    const releaseDateTime = new Date(releaseDate);
    // Calculate the date to the day before
    const notificationDateTime = new Date(releaseDateTime);
    notificationDateTime.setDate(releaseDateTime.getDate() - 1);
    notificationDateTime.setHours(9);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "영화 개봉일 알림",
        body: title,
        releaseDate: releaseDate,
        id: movieId.toString(),
      },
      trigger: notificationDateTime,
    });
    // Notification object to save
    const notification = {
      id: movieId, // Use movieId as the unique ID for scheduled notifications
      title: "Movie release date notification",
      body: title,
      releaseDate: releaseDate,
    };

    console.log("Notification has been successfully scheduled!");
    // save to AsyncStorage
    await storeNotification(notification);
  } catch (error) {
    console.log("Error scheduling notification:", error.message);
  }
};

// Loading a saved notification list
export const getStoredNotifications = async () => {
  try {
    const storedNotifications = await AsyncStorage.getItem("notifications");
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  } catch (error) {
    console.error("Error loading notifications:", error);
    return [];
  }
};
