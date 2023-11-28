import {TextStyle} from 'react-native';
import {FONTS} from './Fonts';
import {scale} from './Scale';

export const Typhography = {
  headerBigDefault: (): TextStyle => ({
    fontSize: scale(35),
    fontFamily: FONTS.quickSandBold,
  }),
  headerHalfBigDefault: (): TextStyle => ({
    fontSize: scale(20),
    fontFamily: FONTS.quickSandBold,
  }),
  headerDefault: (): TextStyle => ({
    fontSize: scale(18),
    fontFamily: FONTS.quickSandBold,
    color: '#fff',
  }),
  bodyBold: (): TextStyle => ({
    fontSize: scale(12),
    fontFamily: FONTS.quickSandBold,
  }),
  bodyDefault: (): TextStyle => ({
    fontSize: scale(12),
    fontFamily: FONTS.quickSandMedium,
  }),
  captionDefault: (): TextStyle => ({
    fontSize: scale(15),
    fontFamily: FONTS.quickSandMedium,
    fontWeight: '400',
    color: '#fff',
  }),
};
