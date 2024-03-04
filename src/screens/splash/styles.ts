import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h, w} from '../../constants';
const styles = StyleSheet.create({
  background: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: w('60%'),
    height: h('15%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
export default styles;
