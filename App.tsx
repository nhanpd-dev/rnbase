import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from './src/store/configureStore';

import { ThemeProvider } from '@/theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { AppNavigator } from '@/navigators/appNavigator';
import { translate } from '@/localization/translate';
// import {AppNavigator} from '@/navigators';

const store = configureAppStore();

export const App: React.FC = function () {
  const { i18n } = useTranslation();
  const onChangeLanguage = async () => {
    await i18n.changeLanguage('vi');
  };
  console.log('====> lang: ', translate('auth.password'));

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
