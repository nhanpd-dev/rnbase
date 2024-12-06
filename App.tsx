/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {configureAppStore} from './src/store/configureStore';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from '@/theme/ThemeProvider';
import {translate} from '@/localization/translate';
import '@/localization/i18n';
import {useTranslation} from 'react-i18next';
import { AppNavigator } from '@/navigators';

const store = configureAppStore();

export const App: React.FC = function () {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {i18n} = useTranslation();
  const onChangeLanguage = async () => {
    await i18n.changeLanguage('vi');
  };
  console.log('====> lang: ', translate('auth.password'));

  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          <AppNavigator
            // linking={linking}
            // initialState={initialNavigationState}
            // onStateChange={onNavigationStateChange}
          />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
