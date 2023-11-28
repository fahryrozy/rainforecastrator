import {scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerAstro: {
    height: scale(80),
    borderRadius: scale(10),
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
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: scale(128),
    height: scale(128),
  },
  info: {flex: 1},
  temp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
  },
  tempText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
    fontSize: scale(75),
  },
  tempInfoText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
    fontSize: scale(24),
  },
  locText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
    fontSize: scale(15),
    fontWeight: '400',
  },
  minMaxText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins',
    fontSize: scale(20),
    fontWeight: '400',
  },
});
