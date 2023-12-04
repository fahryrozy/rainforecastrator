import {Colors, scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  astroTitle: {
    display: 'flex',
    height: scale(45),
    backgroundColor: Colors.lightDark,
    opacity: 0.6,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    marginVertical: scale(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(5),
    paddingHorizontal: scale(15),
  },
  astroContent: {
    height: scale(115),
    backgroundColor: Colors.lightDark,
    opacity: 0.6,
    borderBottomRadius: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: scale(15),
  },
  currentWeather: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
