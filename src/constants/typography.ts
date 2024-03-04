// TODO: write documentation about FONTS and typography along with guides on how to add custom FONTS in own markdown file and add links from here
import { RFPercentage } from "react-native-responsive-fontsize";
const FONTS = {
  thin: "Poppins-Thin",
  light: "Poppins-Light",
  regular: "Poppins-Regular",
  regular_italic: "Poppins-Italic",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
  extrabold: "Poppins-ExtraBold",
};
const FONT_SIZES = {
  tiny: RFPercentage(1.3),
  small: RFPercentage(1.6),
  regular: RFPercentage(1.9),
  medium: RFPercentage(2.4),
  large: RFPercentage(2.8),
  extraLarge: RFPercentage(3.6),
};

export { FONTS, FONT_SIZES };
