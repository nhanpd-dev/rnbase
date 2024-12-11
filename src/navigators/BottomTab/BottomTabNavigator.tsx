import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabsScreens, TabsScreenName } from '../routeNames';
import { HomeScreen, SettingsScreen } from '@/modules';

export type TabNavigatorParamList = {
  HomeStack: undefined;
  SettingStack: undefined;
};

const TABS = [
  {
    screenName: BottomTabsScreens.HomeStack as TabsScreenName,
    component: HomeScreen,
  },
  {
    screenName: BottomTabsScreens.SettingStack as TabsScreenName,
    component: SettingsScreen,
  },
];
const Tab = createBottomTabNavigator<TabNavigatorParamList>();
export const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      {TABS.map(item => (
        <Tab.Screen key={item.screenName} name={item.screenName} component={item.component} options={{ headerShown: false }} />
      ))}
    </Tab.Navigator>
  );
};
