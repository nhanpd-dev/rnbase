/* eslint-disable react-hooks/exhaustive-deps */
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { AppStackParamList, navigationRef } from './utils';
import { MainNavigator } from '@/navigators/MainNavigator';
import { LoginScreen, LandingPage } from '@/modules';
import { useAuth } from '@/slices/auth';
import { readToken } from '@/utils/storage';

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>;

export const AppNavigator: React.FC = (props: NavigationProps) => {
  const { authenticated, setAuthentication } = useAuth();
  useEffect(() => {
    const token = readToken();
    if (token) {
      setAuthentication(true);
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onReady={() => RNBootSplash.hide({ fade: true })} {...props}>
      {authenticated ? <MainNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
