import {Button, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import React, {useEffect, useRef, useState} from "react";
import * as Notifications from "expo-notifications";
import registerForPushNotificationsAsync from "../../utils/registerForPushNotificationsAsync";
import schedulePushNotification from "../../utils/schedulePushNotification";

const Main = () => {
    const [expoPushToken, setExpoPushToken] = useState<any>('');
    const [notification, setNotification] = useState<any>({});
    const notificationListener: { current: any } = useRef();
    const responseListener: { current: any }  = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <View style={GlobalStyles.root}>
            <Text style={styles.text}>App</Text>
            <Text>Your expo push token: {expoPushToken}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Title: {Object.keys(notification).length && notification.request.content.title} </Text>
                <Text>Body: {Object.keys(notification).length && notification.request.content.body}</Text>
                <Text>Data: {Object.keys(notification).length && JSON.stringify(notification.request.content.data)}</Text>
            </View>
            <Button
                title="Press to schedule a notification"
                onPress={async () => {
                    await schedulePushNotification({
                        title: 'You\'ve got mail!',
                        body: 'Here is the notification body',
                        data: 'goes here',
                        trigger: { seconds: 2 }
                    });
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
})

export default Main;
