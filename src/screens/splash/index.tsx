import {Image, Animated, ImageBackground, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {IMAGES} from '../../constants';
import styles from './styles';

import {navigate, resetRoot} from '../../navigators/navigationUtilities';
import {useSelector} from 'react-redux';
type Props = {};

export const Splash = (props: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(500)).current; // Starting position on the right side
  const {token} = useSelector((state: any) => state?.employeeReducer);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(moveAnim, {
        toValue: 0,
        tension: 10,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, moveAnim]);
  setTimeout(() => {
    // navigate("Login");
    resetRoot({
      index: 0,
      routes: [{name: 'MainStack'}],
    });
  }, 1500);
  return (
    <View style={styles.background}>
      <Animated.View
        style={[
          {opacity: fadeAnim},
          {
            transform: [{translateX: moveAnim}],
          },
        ]}>
        <Image source={IMAGES.logo} style={styles.logo} resizeMode="contain" />
      </Animated.View>
    </View>
  );
};
