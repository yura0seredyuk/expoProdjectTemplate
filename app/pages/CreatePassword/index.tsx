import {Button, TextInput, View} from "react-native";
import {useDispatch} from "react-redux";
import {setAuthorized} from "../../store/actions/setAuthorized";
import {Formik} from "formik";
import GlobalStyles from "../../styles/GlobalStyles";

const CreatePassword = () => {
    const dispatch = useDispatch();

    const initialState = {
        password: ''
    }

    const handleSubmit = (values : { password: string }) => {
        console.log(values);
        dispatch(setAuthorized(true));
    };

    return (
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={GlobalStyles.root}>
                    <TextInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        textContentType='password'
                        placeholder='password'
                        maxLength={6}
                        style={{ height: 20, borderWidth: 1, width: 100 }}
                    />
                    <Button title='Submit' onPress={() => handleSubmit()} />
                </View>
            )}
        </Formik>
    );
};

export default CreatePassword;
