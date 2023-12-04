import {Colors, scale} from '@core/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  weatherInfoCard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
    rowGap: scale(2),
  },
  iconContainer: {
    height: scale(75),
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    gap: scale(10),
  },
  locCard: {
    flex: 0.35,
    rowGap: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    paddingVertical: scale(5),
  },
  tempCard: {
    flex: 0.65,
    paddingVertical: scale(2),
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  locTimeCard: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  locTime: {
    textAlign: 'center',
    fontSize: scale(10),
    color: Colors.pureWhite,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
});
