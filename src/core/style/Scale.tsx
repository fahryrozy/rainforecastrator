import {PixelRatio, Dimensions} from 'react-native';

export const currWidth = Dimensions.get('window').width;
export const currHeight = Dimensions.get('window').height;

// Guideline sizes are based on developer screen mobile device
const guidelineBaseWidth = 360;

export const scale = (size: number) =>
  PixelRatio.roundToNearestPixel((currWidth / guidelineBaseWidth) * size);
