import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerAstro: {
    height: scale(80),
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  astroCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
