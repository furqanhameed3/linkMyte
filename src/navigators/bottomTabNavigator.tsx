import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cards from '../screens/bottomTab/cards';
import BatchCards from '../screens/bottomTab/batchCards';
import EditNFC from '../screens/bottomTab/EditNFC';
import {COLORS, FONTS, FONT_SIZES, h, shadow} from '../constants';
import {getIconTabBarIcon} from '../utils/helpers';

type BottomTabParamList = {
  Cards: undefined;
  BatchCards: undefined;
  EditNFC: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightBg}}>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Cards">
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="BatchCards" component={BatchCards} />
        <Tab.Screen name="EditNFC" component={EditNFC} />
      </Tab.Navigator>
    </View>
  );
};

const screenOptions = ({route}: any) => ({
  headerShown: false,
  tabBarStyle: styles.tabBarStyle,
  tabBarLabel: ({focused}: any) => (
    <Text
      style={[
        styles.txtLabel,
        {
          color: focused ? COLORS.primary1 : COLORS.secondary,
        },
      ]}>
      {route.name}
    </Text>
  ),
  tabBarShowLabel: false,
  tabBarIcon: ({focused, size}: any) =>
    getIconTabBarIcon(route.name, focused, 32),
  lazy: true,
  unmountOnBlur: true,
  tabBarHideOnKeyboard: true,
});

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    height: h('9%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#EBEEF2',
    overflow: 'hidden', // this will hide the overflow of the rounded corners
  },
  txtLabel: {
    fontSize: FONT_SIZES.tiny,
    color: COLORS.primary1,
    fontFamily: FONTS.semibold,
    ...shadow,
    shadowColor: COLORS.primary1,
  },
});

export default BottomTabNavigator;
