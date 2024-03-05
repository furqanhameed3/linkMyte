import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h, shadow} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: h('2%'),
    backgroundColor: COLORS.white,
  },
  header: {
    alignItems: 'center',
    marginTop: h('4%'),
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.medium,
    color: COLORS.black,
  },
  filterImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  searchWrapper: {
    marginTop: h('2%'),
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: h('2%'),
    marginBottom: h('2%'),
  },
  txtInput: {
    marginLeft: 5,
    flex: 1,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: '#7f7c7c',
    alignItems: 'center',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: h('0.8%'),
    marginTop: h('0.8%'),
  },
  cardProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImg: {
    height: 55,
    width: 55,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  cardName: {
    marginLeft: 10,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.black,
  },
  cardLink: {
    padding: h('0.5%'),
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cardLinkTxt: {
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.tiny,
  },
  cardNum: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.regular,
    color: '#505050',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#4d4e4e80',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    width: '80%',
    height: '34%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    ...shadow,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  CloseWrapper: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeBtn: {
    zIndex: 999,
  },
});

export default styles;
