import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {LoginScreen} from '@/modules';

export type AuthenticationNavigatorParamList = {
  LoginScreen: undefined;
  // RegisterScreen: undefined
};

export type AuthenticationStackScreenProps<
  T extends keyof AuthenticationNavigatorParamList,
> = NativeStackScreenProps<AuthenticationNavigatorParamList, T>;

const Stack = createNativeStackNavigator<AuthenticationNavigatorParamList>();

const AUTH = [];

export const AuthenticationNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="RegisterScreen" component={Screens.RegisterScreen} /> */}
    </Stack.Navigator>
  );
};
