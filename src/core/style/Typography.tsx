import {TextStyle} from 'react-native';
import {FONTS} from './Fonts';
import {scale} from './Scale';
import {Colors} from './Colors';

export const Typhography = {
  headerExtraBigDefault: (): TextStyle => ({
    fontSize: scale(60),
    fontFamily: FONTS.quickSandBold,
    fontWeight: '800',
  }),
  headerBigDefault: (): TextStyle => ({
    fontSize: scale(30),
    fontFamily: FONTS.quickSandBold,
    fontWeight: '500',
  }),
  headerHalfBigDefault: (): TextStyle => ({
    fontSize: scale(20),
    fontFamily: FONTS.quickSandBold,
  }),
  headerDefault: (): TextStyle => ({
    fontSize: scale(18),
    fontFamily: FONTS.quickSandBold,
    color: Colors.pureWhite,
  }),
  bodyBold: (): TextStyle => ({
    fontSize: scale(12),
    fontFamily: FONTS.quickSandBold,
  }),
  bodyDefault: (): TextStyle => ({
    fontSize: scale(12),
    fontFamily: FONTS.quickSandMedium,
    color: Colors.pureWhite,
  }),
  captionDefault: (): TextStyle => ({
    fontSize: scale(15),
    fontFamily: FONTS.quickSandMedium,
    fontWeight: '400',
    color: Colors.pureWhite,
  }),
};
