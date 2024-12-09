import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@/theme/ThemeProvider';
import { AppNavigator } from '@/navigators/appNavigator';
import { configureAppStore } from './src/store/configureStore';

const store = configureAppStore();

export const App: React.FC = function () {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
