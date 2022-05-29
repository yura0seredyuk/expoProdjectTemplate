import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAuthorized} from '../../store/actions/setAuthorized';
import {Formik} from 'formik';
import GlobalStyles from '../../styles/GlobalStyles';
import GlobalColor from '../../styles/GlobalColor';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePassword = () => {
    const dispatch = useDispatch();

    const initialState = {
        password: ''
    }

    const handleSubmit = async (values : { password: string }) => {
        console.log(values);
        dispatch(setAuthorized(true));
        await AsyncStorage.setItem('@authorized', 'true');
    };

    return (
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={[GlobalStyles.root, GlobalColor.backgroundMain]}>
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
