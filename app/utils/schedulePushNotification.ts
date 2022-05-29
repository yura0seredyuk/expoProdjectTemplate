import * as Notifications from "expo-notifications";

type Notification = {
    title: string
    body: string
    data: string
    trigger: { seconds: number }
}

export default async function schedulePushNotification({ title, body, data, trigger }: Notification) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body,
            data: { data },
        },
        trigger,
    });
}
