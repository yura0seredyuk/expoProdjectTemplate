import * as Notifications from "expo-notifications";

export default async function schedulePushNotification({ title, body, data, trigger }) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body,
            data: { data },
        },
        trigger,
    });
}
