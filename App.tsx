import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import GlobalStyles from './app/styles/GlobalStyles';

import {Provider, useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {Store} from './app/store/store';
import {setLoading} from './app/store/actions/setLoading';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import languages from "./app/translations";

i18n.fallbacks = true;
i18n.translations = languages;
i18n.locale = Localization.locale;

const AppContent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootStateOrAny) => state.userReducers);

  useEffect(() => {
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

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
      <View style={styles.root}>
        <Text style={[GlobalStyles.text, styles.text]}>{i18n.t('hello')}</Text>
      </View>
  );
};

const App = () => {
  return (
      <Provider store={Store}>
        <AppContent />
      </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 25,
  },
});

export default App;
