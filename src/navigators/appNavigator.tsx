import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { AppStackParamList, navigationRef } from './utils'
import { MainNavigator } from '@/navigators/MainNavigator'
import { LoginScreen, LandingPage } from '@/modules'

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>

export const AppNavigator: React.FC = (props: NavigationProps) => {
  // useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({ fade: true })}
      {...props}>
      <AppStack />
    </NavigationContainer>
  )
}
