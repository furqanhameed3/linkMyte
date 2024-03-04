import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: h('2%'),
  },
  inputContainer: {
    height: 45,
    backgroundColor: COLORS.white,
    width: '100%',
    borderWidth: 0.8,
    borderColor: COLORS.black,
    borderRadius: 10,

    marginTop: h('2%'),
  },
  logoBtn: {
    marginTop: h('4%'),
    height: 35,
    backgroundColor: '#5e0dd336',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '35%',
  },
  logoTxt: {
    color: '#5E0DD3',
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
  },
  profileImg: {
    height: 105,
    width: 105,
    borderRadius: 105 / 2,
    alignSelf: 'center',
    marginTop: h('2%'),
    marginBottom: h('4%'),
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: h('2%'),
  },
  imgTxt: {
    color: COLORS.black,
    fontFamily: FONTS.medium,
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'center',
  },
});

export default styles;
