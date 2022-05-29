import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { TextInput, View } from 'react-native';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const StartingForm = ({ navigation } : { navigation: any }) => {
  const initialValues = {
    name: '',
    email: ''
  }

  const handleSubmit = (values : { name: string, email: string }) => {
    console.log(values);
    navigation.navigate('CreatePassword');
  };

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                style={styles.input}
                maxLength={20}
                placeholder='Name'
              />
              <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  maxLength={50}
                  placeholder='Email'
              />
              <ButtonPrimary text='Continue' handlePress={handleSubmit} page='loginForm'/>
            </View>
        )}
      </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    margin: 10,
    borderWidth: 1
  }
})

export default StartingForm;
