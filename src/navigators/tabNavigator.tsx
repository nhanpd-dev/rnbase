import React from 'react'
import { createBottomTabNavigator, BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  TrackingSearchPage,
  TrackingsPage,
} from '../modules'
import { TabbarScreens } from './constants'
import { ImageAnimation } from '../components'
import { icons } from '../assets'

export type TabNavigatorParamList = {
  TrackingsAirline: undefined
  TrackingOcean: undefined
  Notification: undefined
  Search_Tracking: undefined
}
interface IHeaderProps {
  title?: string
}
const Header: React.FC<BottomTabHeaderProps & IHeaderProps> = ({
  options,
  route,
  title = '',
  ...rest
}) => {
  const navigation: any = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 0,
        }}>
        <View />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <ImageAnimation source={icons.hamburger} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#000000', marginBottom: 8 }} />
    </SafeAreaView>
  )
}

const TABS = [
  {
    screenName: TabbarScreens.trackingsAirline,
    Component: TrackingsPage,
    title: 'Trackings đường bay',
    iconActive: icons.airportActive,
    iconInactive: icons.airport,
  },
  {
    screenName: TabbarScreens.searchTracking,
    Component: TrackingSearchPage,
    title: 'Tìm kiếm tracking',
    iconActive: icons.searchActive,
    iconInactive: icons.search,
  },
]
const Tab = createBottomTabNavigator<TabNavigatorParamList>()
export const Tabbar: React.FC = () => {
  return (
    <Tab.Navigator>
      {TABS.map(item => (
        <Tab.Screen
          key={item.screenName}
          name={item.screenName}
          component={item.Component}
          options={{
            tabBarIcon: props => {
              return (
                <ImageAnimation
                  source={props.focused ? item.iconActive : item.iconInactive}
                  style={{ width: 25, height: 25 }}
                />
              )
            },
            tabBarActiveTintColor: '#D35400',
            header: props => <Header title={item.title} {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
