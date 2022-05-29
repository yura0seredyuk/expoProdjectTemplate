import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import GlobalColor from '../../styles/GlobalColor';
import GlobalFonts from '../../styles/GlobalFonts';
import { StyleSheet, Text, View } from 'react-native';
import i18n from 'i18n-js';
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

const WelcomePage = ({ navigation } : { navigation: any }) => {
    const handlePress = () => {
        navigation.navigate('Form')
    }

    return (
        <View style={[GlobalStyles.root, GlobalColor.backgroundMain]}>
            <Text style={styles.text}>
                {i18n.t('welcome')}
            </Text>
            <ButtonPrimary text='Continue' handlePress={handlePress} page='welcome'/>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        bottom: '60%',
        fontSize: 40,
        lineHeight: 50,
        letterSpacing: 0.05,
        fontFamily: GlobalFonts.NotoSansSemiBold.fontFamily,
        color: GlobalColor.darkGreen.color
    },
});


export default WelcomePage;
