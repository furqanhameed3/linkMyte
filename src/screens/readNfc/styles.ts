import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZES, h} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    //  justifyContent: 'center',
    paddingHorizontal: h('2%'),
  },
  Image: {
    marginTop: h('18%'),
    height: '30%',
    width: '55%',
    resizeMode: 'contain',
  },
  text: {
    color: '#666666',
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.regular,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default styles;
