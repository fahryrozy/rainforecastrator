import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  forecastCard: {
    borderRadius: scale(10),
    marginVertical: scale(5),
  },
  title: {
    display: 'flex',
    height: scale(45),
    backgroundColor: '#222',
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
    backgroundColor: '#222',
    opacity: 0.6,
    borderBottomRadius: scale(10),
    flexDirection: 'row',
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    paddingHorizontal: scale(10),
  },
  renderedCard: {
    width: 80,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: scale(60),
    height: scale(60),
  },
  temp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70%',
    backgroundColor: '#0bd',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
    fontSize: scale(64),
  },
  tempText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
  },
  timeText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
  },
  loc: {
    rowGap: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    backgroundColor: '#000',
  },
});
