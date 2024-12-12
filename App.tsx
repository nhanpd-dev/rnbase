import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { AppNavigator } from '@/navigators/appNavigator';
import { configureAppStore } from './src/store/configureStore';
import 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const store = configureAppStore();

export const App: React.FC = function () {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
