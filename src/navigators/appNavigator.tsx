/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RNBootSplash from 'react-native-bootsplash';
import {ImageAnimation} from '../components';
import {goBack} from '@/navigation';

import {Tabbar} from './tabNavigator';
import {
  SigninPage,
  SignupPage,
  TrackingDetailPage,
  TrackingChangeStatusPage,
} from '../modules';
import {navigationRef, useBackButtonHandler} from './utils';
import {StackScreens} from './constants';
import {TrackingSearchPage} from '../modules/trackingSearch/loadable';
import {KEYS, storage} from '../utils';
import {SlideMenu} from '@/components/SlideMenu';
import {icons} from '../assets';
import {useMetadataSlice} from '@/slices/metadata';

export type NavigatorParamList = {
  TabBar: undefined;
  Login: undefined;
  Register: undefined;
  Search_Tracking: undefined;
  trackingDetail: undefined;
  trackingChangeStatusPage: {data: any};
};
const exitRoutes = ['welcome'];
interface IHeaderProps {
  title?: string;
  isShowBack?: boolean;
}
const Header: React.FC<NativeStackHeaderProps & IHeaderProps> = ({
  options,
  route,
  title = '',
  isShowBack = true,
  ...rest
}) => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 0,
        }}>
        {isShowBack ? (
          <TouchableOpacity onPress={() => goBack()}>
            <ImageAnimation
              source={icons.back}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <ImageAnimation
            source={icons.hamburger}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#000000',
          marginBottom: 8,
        }}
      />
    </SafeAreaView>
  );
};

export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<NavigatorParamList>();
const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={StackScreens.searchTracking}>
      <Stack.Screen
        name={StackScreens.tabbar}
        component={Tabbar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackScreens.trackingDetail}
        component={TrackingDetailPage}
        options={{
          headerShown: true,
          header: props => <Header title="Tracking Detail" {...props} />,
        }}
      />
      <Stack.Screen
        name={StackScreens.trackingChangeStatusPage}
        component={TrackingChangeStatusPage}
        options={{
          headerShown: true,
          header: props => <Header title="Vận chuyển khách hàng" {...props} />,
        }}
      />

      <Stack.Screen
        name={StackScreens.searchTracking}
        component={TrackingSearchPage}
        options={{
          headerShown: true,
          header: props => (
            <Header
              title="Tìm kiếm mã tracking"
              isShowBack={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen name={StackScreens.login} component={SigninPage} />
      <Stack.Screen name={StackScreens.register} component={SignupPage} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: true,
        drawerStyle: {
          width: 350,
        },
      }}
      drawerContent={(props: any) => <SlideMenu {...props} />}>
      <Drawer.Screen name="AppStack" component={AppStack} />
    </Drawer.Navigator>
  );
};

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

export function AppNavigator(props: NavigationProps) {
  useBackButtonHandler(canExit);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({fade: true})}
      {...props}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

AppNavigator.displayName = 'AppNavigator';
