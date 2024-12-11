export const BottomTabsScreens = {
  HomeStack: 'HomeStack',
  SettingStack: 'SettingStack',
};

export type TabsScreenName = keyof typeof BottomTabsScreens;

export const AuthScreen = {
  LoginScreen: 'LoginScreen',
}

export type AuthScreenName = keyof typeof AuthScreen;

export const MainScreen = {
  BottomTab: 'BottomTab',
}
export type MainScreenName = keyof typeof MainScreen;
