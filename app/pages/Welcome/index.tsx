import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import {Button, StyleSheet, Text, View} from "react-native";
import i18n from 'i18n-js';

const WelcomePage = ({ navigation } : { navigation: any }) => {
    const handlePress = () => {
        navigation.navigate('Form')
    }

    return (
        <View style={GlobalStyles.root}>
            <Text style={[GlobalStyles.text, styles.text]}>{i18n.t('welcome')}</Text>
            <Button title='Continue' onPress={handlePress} />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});


export default WelcomePage;
