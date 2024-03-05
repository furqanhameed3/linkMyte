import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, FONT_SIZES, h} from '../constants';

const Button = ({title, loading, primary, secondary, ...rest}: any) => {
  const touchprops = {
    activeOpacity: 0.8,
    ...rest,
  };
  return (
    <View style={{width: '100%'}}>
      {primary ? (
        <TouchableOpacity
          {...touchprops}
          disabled={loading || rest.disabled}
          style={styles.button}>
          <Text style={styles.BtnTxt}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          {...touchprops}
          disabled={loading || rest.disabled}
          style={styles.btnSecondary}>
          <Text style={styles.BtnTxt}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: h('1.6%'),
    backgroundColor: COLORS.primary1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('5%'),
  },
  btnSecondary: {
    width: '100%',
    padding: h('1.6%'),
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('2%'),
  },
  BtnTxt: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.white,
  },
});
export default Button;
