import {useToast} from 'react-native-styled-toast';
import {COLORS, FONTS, FONT_SIZES, h} from '../constants';

/**
 * Custom hook for displaying success and error toast messages.
 *
 * @return {{showSuccessToast: (message?: string) => void, showErrorToast: (message?: string) => void}} The functions for showing success and error toast messages
 */
export const useToastHook = () => {
  const {toast} = useToast();

  const showSuccessToast = (message?: string) => {
    toast({
      message: message ? message : 'SUCCESS',
      toastStyles: {
        bg: COLORS.pigmentGreen,
        borderRadius: 10,
        borderWidth: 0,
      },
      iconFamily: 'Octicons',
      iconName: 'check-circle-fill',
      ...sameMessageProps,
    });
  };
  /**
   * Show an error toast with an optional message.
   *
   * @param {string} message - an optional message for the toast
   */
  const showErrorToast = (message?: string) => {
    toast({
      message: message ? message : 'ERROR',
      toastStyles: {
        bg: COLORS.redNCS,
        borderRadius: 10,
        borderWidth: 0,
      },
      iconFamily: 'MaterialIcons',
      iconName: 'error',
      shouldVibrate: true,
      ...sameMessageProps,
    });
  };
  return {showSuccessToast, showErrorToast};
};
const sameMessageProps = {
  color: COLORS.white,
  iconColor: COLORS.white,
  closeIconColor: COLORS.white,
  hideAccent: true,
  messageProps: {
    style: {
      fontFamily: FONTS.semibold,
      fontSize: FONT_SIZES.small,
      marginTop: h('0.4%'),
    },
  },
  closeButtonStyles: {},
};
