import {Button, StyleSheet, Text, View} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import StartingForm from "../../components/StartingForm";

const FormPage = ({ navigation } : { navigation: any }) => {
    const handlePress = () => {
        navigation.navigate('CreatePassword')
    }

    return (
        <View style={GlobalStyles.root}>
            <Text style={[GlobalStyles.text, styles.text]}>Form page</Text>
            <StartingForm navigation={navigation}/>
            <Button title='Skip' onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default FormPage;
