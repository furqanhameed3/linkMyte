import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: h('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  heading: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.large,
  },
  text: {
    color: '#666666',
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.regular,
    marginTop: 5,
  },
  pinPlaceholder: {
    width: 10,
    height: 10,
    borderRadius: 25,
    opacity: 0.4,
    backgroundColor: COLORS.semiWhite,
  },
  pinMask: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  cellStyle: {
    borderColor: COLORS.semiWhite,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: h('12%'),
    backgroundColor: COLORS.lightGray,
  },
  cellStyleFocused: {
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 6,
  },
  txtPin: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.large,
    color: COLORS.black,
  },
});

export default styles;
