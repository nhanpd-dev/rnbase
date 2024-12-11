import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigator } from '@/navigators/BottomTab/BottomTabNavigator';

export type MainNavigatorParamList = {
  BottomTab: {
    screen?: string;
    params: any;
  };
};

export type MainStackScreenProps<T extends keyof MainNavigatorParamList> = NativeStackScreenProps<MainNavigatorParamList, T>;

const Stack = createNativeStackNavigator<MainNavigatorParamList>();
export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
