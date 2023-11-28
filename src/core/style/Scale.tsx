import {PixelRatio, Dimensions} from 'react-native';

export const currWidth = Dimensions.get('window').width;
export const currHeight = Dimensions.get('window').height;
// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

export const scale = (size: number) =>
  PixelRatio.roundToNearestPixel((currWidth / guidelineBaseWidth) * size);
