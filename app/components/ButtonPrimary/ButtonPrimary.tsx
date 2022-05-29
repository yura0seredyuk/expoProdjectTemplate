import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import GlobalColor from '../../styles/GlobalColor';
import GlobalFonts from '../../styles/GlobalFonts';

type ButtonType = {
    text: string
    handlePress: () => void,
    page: string
}

const ButtonPrimary = ({ handlePress, text, page }: ButtonType) => {
    return (
        <Pressable
            style={[
                styles.button,
                GlobalColor.buttonShadow,
                page === 'welcome' && styles.absoluteBtnPosition
            ]}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
        backgroundColor: GlobalColor.lightGreen.color,
        borderRadius: 20,
    },
    buttonText: {
        color: GlobalColor.whiteAnother.color,
        fontFamily: GlobalFonts.NotoSansRegular.fontFamily,
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.1,
        textTransform: 'uppercase',
    },
    absoluteBtnPosition: {
        position: 'absolute',
        bottom: 130,
    }
});

export default ButtonPrimary;
