import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import { Provider, useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Store } from './app/store/store';
import { setLoading } from './app/store/actions/setLoading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Notifications from 'expo-notifications';

import GlobalColor from './app/styles/GlobalColor';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import languages from './app/translations';

i18n.fallbacks = true;
i18n.translations = languages;
i18n.locale = Localization.locale;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Main from './app/pages/Main';
import WelcomePage from './app/pages/Welcome';
import FormPage from './app/pages/Form';
import CreatePassword from './app/pages/CreatePassword';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContent = () => {
  const dispatch = useDispatch();
  const [storageAuthorized, setStorageAuthorized] = useState(false);
  const { loading, authorized } = useSelector((state: RootStateOrAny) => state.userReducers);

  const getAuth = async () => {
      try {
          const auth = await AsyncStorage.getItem('@authorized');
          if (auth !== null) {
              return auth;
          }
      } catch (e) {
          console.log(e);
      }
  }

  useEffect(() => {
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAuth().then((value) => {
        if (value === 'true') {
            setStorageAuthorized(false); // TODO: SET TO TRUE
        }
    })
  }, []);

  useEffect(() => {
    console.log('loading', loading);
    console.log('authorized', authorized)
  }, [loading, authorized]);

  const [loaded] = useFonts({
    'NotoSansThin': require('./app/assets/fonts/NotoSans-Thin.ttf'),
    'NotoSansLight': require('./app/assets/fonts/NotoSans-Light.ttf'),
    'NotoSansExtraLight': require('./app/assets/fonts/NotoSans-ExtraLight.ttf'),
    'NotoSansRegular': require('./app/assets/fonts/NotoSans-Regular.ttf'),
    'NotoSansMedium': require('./app/assets/fonts/NotoSans-Medium.ttf'),
    'NotoSansSemiBold': require('./app/assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSansBold': require('./app/assets/fonts/NotoSans-Bold.ttf'),
    'NotoSansExtraBold': require('./app/assets/fonts/NotoSans-ExtraBold.ttf'),
    'NotoSansBlack': require('./app/assets/fonts/NotoSans-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
      authorized || storageAuthorized ? (
              <NavigationContainer>
                  <Tab.Navigator>
                      <Tab.Screen name='App' component={Main} />
                  </Tab.Navigator>
              </NavigationContainer>
        ) : (
            <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShadowVisible: false
                  }}
              >
                <Stack.Screen
                    name='Welcome'
                    component={WelcomePage}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: GlobalColor.backgroundMain.backgroundColor,
                        },
                    }}
                />
                <Stack.Screen
                    name='Form'
                    component={FormPage}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: GlobalColor.backgroundMain.backgroundColor,
                        },
                    }}
                />
                <Stack.Screen
                    name='CreatePassword'
                    component={CreatePassword}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: GlobalColor.backgroundMain.backgroundColor,
                        },
                    }}
                />
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
