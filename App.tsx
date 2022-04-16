import React, {useEffect} from 'react';
import { useFonts } from 'expo-font';

import {Provider, useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {Store} from './app/store/store';
import {setLoading} from './app/store/actions/setLoading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import languages from "./app/translations";

i18n.fallbacks = true;
i18n.translations = languages;
i18n.locale = Localization.locale;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Main from "./app/pages/Main";
import WelcomePage from "./app/pages/Welcome";
import FormPage from "./app/pages/Form";
import CreatePassword from "./app/pages/CreatePassword";

const AppContent = () => {
  const dispatch = useDispatch();
  const { loading, authorized } = useSelector((state: RootStateOrAny) => state.userReducers);

  useEffect(() => {
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('loading', loading);
    console.log('authorized', authorized)
  }, [loading, authorized]);

  const [loaded] = useFonts({
    'RobotoThin': require('./app/assets/fonts/Roboto-Thin.ttf'),
    'RobotoLight': require('./app/assets/fonts/Roboto-Light.ttf'),
    'RobotoRegular': require('./app/assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('./app/assets/fonts/Roboto-Medium.ttf'),
    'RobotoBold': require('./app/assets/fonts/Roboto-Bold.ttf'),
    'RobotoBlack': require('./app/assets/fonts/Roboto-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
      authorized ? (
              <NavigationContainer>
                  <Tab.Navigator>
                      <Tab.Screen name="App" component={Main} />
                  </Tab.Navigator>
              </NavigationContainer>
        ) : (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="Form" component={FormPage} />
                <Stack.Screen name='CreatePassword' component={CreatePassword} />
              </Stack.Navigator>
            </NavigationContainer>
        )
  );
};

const App = () => {
  return (
      <Provider store={Store}>
        <AppContent/>
      </Provider>
  );
};

export default App;
