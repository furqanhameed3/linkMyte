import {View, Text, StatusBar, useColorScheme} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from '../screens/bottomTab/cards';
import Login from '../screens/auth/login';
import {Splash} from '../screens/splash';
import {useSelector} from 'react-redux';
import ReadNfc from '../screens/readNfc';
import EditCard from '../screens/editCard';

const Stack = createStackNavigator();
const Root = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <>
      <StatusBar
        animated={true}
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        showHideTransition={'slide'}
        hidden={false}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="BottomTabNavigator">
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="ReadNfc" component={ReadNfc} />
        <Stack.Screen name="EditCard" component={EditCard} />
      </Stack.Navigator>
    </>
  );
};

const Main_Stack = () => {
  const {token} = useSelector((state: any) => state?.employeeReducer);
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {!token ? (
        <MainStack.Screen name="Login" component={Login} />
      ) : (
        <MainStack.Screen name="AppStack" component={AppStack} />
      )}
    </MainStack.Navigator>
  );
};

export const RootStack = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AppStack">
        {/* <Root.Screen name="Splash" component={Splash} /> */}
        <Root.Screen name="MainStack" component={Main_Stack} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
