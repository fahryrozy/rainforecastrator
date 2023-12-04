import {Colors, scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  forecastCard: {
    borderRadius: scale(10),
    marginVertical: scale(5),
  },
  title: {
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
  content: {
    height: scale(145),
    backgroundColor: Colors.lightDark,
    opacity: 0.6,
    borderBottomRadius: scale(10),
    flexDirection: 'row',
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    paddingHorizontal: scale(10),
  },
  renderedCard: {
    width: scale(80),
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
