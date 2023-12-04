import {StyleSheet} from 'react-native';
import {scale} from './Scale';

const IconStyle = StyleSheet.create({
  iconSmall: {
    width: scale(20),
    height: scale(20),
  },
  iconMedium: {
    width: scale(60),
    height: scale(60),
  },
  iconBig: {
    width: scale(80),
    height: scale(80),
  },
});

export default IconStyle;
