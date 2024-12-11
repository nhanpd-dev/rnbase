import React from "react"
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"
import { BottomTabNavigator } from "@/navigators/BottomTab/BottomTabNavigator"

export type MainNavigatorParamList = {
  BottomTab: {
    screen?: string
    params: any
  }
}

export type MainStackScreenProps<T extends keyof MainNavigatorParamList> = NativeStackScreenProps<
  MainNavigatorParamList,
  T
>

const Stack = createNativeStackNavigator<MainNavigatorParamList>()
export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          cardStyle: { backgroundColor: "transparent" },
          headerShown: false,
        } as NativeStackNavigationOptions
      }
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />

      {/* Screens will display above bottom tab */}
      {/* <Stack.Screen name="ProfileScreen" component={Screens.ProfileScreen} /> */}
    </Stack.Navigator>
  )
}
