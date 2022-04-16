import {Text, View} from "react-native";
import {StyleSheet} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

const Main = () => {
    return (
        <View style={GlobalStyles.root}>
            <Text style={styles.text}>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
})

export default Main;
