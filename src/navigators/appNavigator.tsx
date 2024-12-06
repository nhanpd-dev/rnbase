import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { useColorScheme } from "react-native"
import { AppStackParamList, navigationRef } from "./utils"
import { AuthenticationNavigator } from "@/navigators/AuthenticationNavigator"
import { MainNavigator } from "@/navigators/MainNavigator"
import { SplashScreen } from "@/modules"

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"SplashScreen"}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen name="AuthenticationNavigator" component={AuthenticationNavigator} />
    </Stack.Navigator>
  )
}

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>

export const AppNavigator: React.FC = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  // useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({ fade: true })}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}
