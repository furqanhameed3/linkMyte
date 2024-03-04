import * as React from 'react';
import {COLORS, Fontisto, IMAGES, MaterialCommunityIcons} from '../constants';
import {Image, ImageProps, View} from 'react-native';

const getIconTabBarIcon = (
  routeName: string,
  focused: boolean,
  size: number,
) => {
  let iconStyle = focused
    ? {
        height: 32,
        width: 32,
      }
    : {
        height: size - 3,
        width: size - 3,
        tintColor: COLORS.gray,
      };
  let imageProps: ImageProps = {
    source: IMAGES.CardsFocused,
    style: iconStyle,
    resizeMode: 'contain',
  };
  if (routeName === 'Cards')
    imageProps.source = focused ? IMAGES.CardsFocused : IMAGES.Cards;
  else if (routeName === 'BatchCards')
    imageProps.source = focused ? IMAGES.BatchCardsFocued : IMAGES.BatchCards;
  else if (routeName === 'EditNFC')
    imageProps.source = focused ? IMAGES.EditNFCFocused : IMAGES.EditNFC;

  return (
    <View>
      <Image {...imageProps} />
    </View>
  );
};

export {getIconTabBarIcon};
